let ticketList = [];
$(document).ready(function () {
    loadPurchasePage();
});

function loadPurchasePage() {
    let data = JSON.parse(localStorage.getItem('cruises'));
    ticketList = data;
    loadPurchases(ticketList);
    $('#totalCost').text("R" + determineTotalCost().toFixed(2));
}

function loadPurchases(arrayToLoad) {
    $("#purchaseTable").empty();
    for (let i = 0; i < arrayToLoad.length; i++) {
        currTrip = arrayToLoad[i];

        $("#purchaseTable").append($("#purchaseTableEntry").html());

        let currentChild = $("#purchaseTable").children().eq(i);

        $(currentChild).find("#cruiseName").text(currTrip.name);
        $(currentChild).find("#cruiseCode").text(currTrip.tripCode);
        $(currentChild).find("#cruiseDepartPoint").text(currTrip.departurePoint);
        $(currentChild).find("#cruiseDestinations").text(myToString(currTrip.destinations));
        $(currentChild).find("#cruiseDepartureDate").text(currTrip.departureYear + "/" + currTrip.departureMonth + "/" + currTrip.departureDay);
        $(currentChild).find("#cruiseDuration").text(currTrip.tripDuration + " days");
        thisTicketCost = ($(currentChild).find("#cruiseNumTickets").val()) * (currTrip.cost);
        $(currentChild).find("#cruiseCost").text("R" + thisTicketCost.toFixed(2));
    }
}

$('#purchaseTable').on('mouseenter', 'tr', function(event) {
    $(this).addClass('hoveredTrip').siblings().removeClass('hoveredTrip');
});
function removeCruiseFromCart() {
    currCruise = findCorrectEntry($('.hoveredTrip').find('#cruiseCode').text());
    
    const index = ticketList.indexOf(currCruise);
    const x = ticketList.splice(index, 1);
    $('.hoveredTrip').remove();
    $('#totalCost').text("R" + determineTotalCost().toFixed(2));
}

function determineTotalCost() {
    runningTotal = 0;
    $('#purchaseTable').children().each(function () {
        currCruise = findCorrectEntry($(this).find('#cruiseCode').text());
        runningTotal += determineTicketsCost(currCruise, $(this).find('#cruiseNumTickets').val());
    });

    return runningTotal;
}
function determineTicketsCost(cruise, numTickets) {
    theseTicketsCost = numTickets * (cruise.cost);
    return theseTicketsCost;
}

function updateTripCost() {
    currTrip = findCorrectEntry($('.hoveredTrip').find('#cruiseCode').text());
    thisTicketCost = determineTicketsCost(currTrip, ($('.hoveredTrip').find("#cruiseNumTickets").val()));
    $('.hoveredTrip').find("#cruiseCost").text("R" + thisTicketCost.toFixed(2));
    $('#totalCost').text("R" + determineTotalCost().toFixed(2));
}

function findCorrectEntry(selectedElement) {
    for (let i = 0; i < ticketList.length; i++) {
        currElement = ticketList[i];
         if (currElement.tripCode === selectedElement) {
            correctElement = currElement;
            break;
         }
    }
    if (correctElement === null) {
        return null;
    }
    return correctElement;
}

function purchaseTrips(){
    console.log("Hello World!")
}

function clearCart() {
    arrayLength = ticketList.length;
    console.log(ticketList);
    for (let i = 0; i < arrayLength; i++) {
        ticketList.pop();
    }
    console.log(ticketList);
    $('#purchaseTable').empty()
    $('#totalCost').text("R" + determineTotalCost().toFixed(2));
}
