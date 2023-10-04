
let arrCruisesFiltered = [];
let cruisesInCart = [];


$(document).ready(function () {
    $("#foldColumn").hide();
    $("#cruiseTable").empty();
    loadCruises(filterCruises());
});

$('#cruiseList').on('click', 'tbody tr', function(event) {
    if ($(this).hasClass('selectedEntry')) {
        $(this).removeClass('selectedEntry');
        $("#foldColumn").hide(600);
    }
    else {
        $(this).addClass('selectedEntry').siblings().removeClass('selectedEntry');

        currCruise = findCorrectEntry($('.selectedEntry').find('#cruiseCode').text());
        openInfoFold();
    }
});


function loadCruises(arrayToLoad) {
    $("#cruiseTable").empty();
    for (let i = 0; i < arrayToLoad.length; i++) {
        currCruise = arrayToLoad[i];

        $("#cruiseTable").append($("#cruiseTableEntry").html());

        let currentChild = $("#cruiseTable").children().eq(i);

        $(currentChild).find("#cruiseCode").text(currCruise.tripCode);
        $(currentChild).find("#cruiseDepartPoint").text(currCruise.departurePoint);
        $(currentChild).find("#cruiseDestinations").text(myToString(currCruise.destinations));
        $(currentChild).find("#cruiseDepartureDate").text(currCruise.departureYear + "/" + currCruise.departureMonth.toString().padStart(2, '0') + "/" + currCruise.departureDay.toString().padStart(2, '0'));
        $(currentChild).find("#cruiseDuration").text(currCruise.tripDuration + " days");
    }
}

function openInfoFold() {
    let correctElement = findCorrectEntry($('.selectedEntry').find('#cruiseCode').text());
    
    $("#foldColumn").show();
    $('#foldColumn').find('#cruiseName').html(correctElement.name);
    $('#foldColumn').find('#cruiseDescription').html(correctElement.description);
    $('#foldColumn').find('#cruiseCode').html('<strong>Cruise Code:</strong> ' + correctElement.tripCode);
    $('#foldColumn').find('#cruiseDepartLocation').html('<strong>Depart from:</strong> ' + correctElement.departurePoint);
    $('#foldColumn').find('#cruiseDepartDate').html('<strong>Departure Date:</strong> ' + correctElement.departureYear + "/" + correctElement.departureMonth.toString().padStart(2, '0') + "/" + correctElement.departureDay.toString().padStart(2, '0'));
    $('#foldColumn').find('#cruiseRoute').html('<strong>Destinations:</strong> ' + myToString(correctElement.destinations));
    if (correctElement.roundTrip == true) {
        $('#foldColumn').find('#cruiseRoundTrip').html('<strong>Round Trip:</strong> Yes');
    }
    else {
        $('#foldColumn').find('#cruiseRoundTrip').html('<strong>Round Trip:</strong> No');
    }
    $('#foldColumn').find('#cruiseDuration').html('<strong>Cruise Duration:</strong> ' + correctElement.tripDuration + ' days');
    $('#foldColumn').find('#cruiseCost').html('<strong>Ticket Cost:</strong> R' + correctElement.cost.toFixed(2));
   
    
    if (myInArray(correctElement, cruisesInCart)) {
        $('#addButton').addClass('disabled');
    }
    else {
        $('#addButton').removeClass('disabled');
    }
    $("#foldColumn").show('600');
}

function addCruiseToCart() {
    let correctCruise = findCorrectEntry($('.selectedEntry').find('#cruiseCode').text());
    if (myInArray(correctCruise, cruisesInCart)) {
        console.log('Already in cart');
    }
    else {
        cruisesInCart.push(correctCruise);
        $('#addButton').addClass('disabled');
        $("#foldColumn").hide(600);
        $('.selectedEntry').removeClass('selectedEntry');
        saveToLocal(cruisesInCart);
    }
}


function findCorrectEntry(selectedElement) {
    for (let i = 0; i < arrCruises.length; i++) {
        currElement = arrCruises[i];
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

function myToString(array) {
    let output = "";
    for (let i = 0; i < array.length; i++) {
        currElement = array[i];
        if ((array.length > 1) && (output != "")) {
            output += ", ";
        }
        output += currElement;
    }    
    return output;
}

function myInArray(item, array) {
    for (let i = 0; i < array.length; i++) {
        currElement = array[i];
        if (array[i].tripCode == item.tripCode) {
            return true;
        }
    }    
    return false;
}

function saveToLocal(arrayToSave) {
    let listCruisesString = arrayToSave;

    let data = JSON.stringify(listCruisesString);
    localStorage.setItem('cruises', data);
}

function goToPurchasePage() {
    
}

function filterCruises() {
    switch ($('#filterDropdown').find(':selected').text()) {
        case "All Destinations":
            sortingMethod = "All Destinations";
            arrCruisesFiltered = [];
            arrCruisesFiltered = arrCruises;
            break;
        case "Short Duration Trips":
            sortingMethod = "Short Duration Trips";
            arrCruisesFiltered = [];
            arrCruisesFiltered = arrCruises.filter(cruise => cruise.tripDuration <= 5);
            break;
        case "Long Duration Trips":
            sortingMethod = "Long Duration Trips";
            arrCruisesFiltered = [];
            arrCruisesFiltered = arrCruises.filter(cruise => cruise.tripDuration > 5);
            break;
        case "Single Destination":
            sortingMethod = "Single Destination";
            arrCruisesFiltered = [];
            arrCruisesFiltered = arrCruises.filter(cruise => cruise.destinations.length == 1);
            break;
        case "Multi Destinations":
            sortingMethod = "Multi Destinations";
            arrCruisesFiltered = [];
            arrCruisesFiltered = arrCruises.filter(cruise => cruise.destinations.length > 1);
            break;
        case "Round Trips":
            sortingMethod = "Round Trips";
            arrCruisesFiltered = [];
            arrCruisesFiltered = arrCruises.filter(cruise => cruise.roundTrip);
            break;
        case "Row Boat Special":
            sortingMethod = "Row Boat Special";
            let sortedPriceArr = [];
            sortedPriceArr = arrCruises.sort((a, b) => {
                return a.cost - b.cost;
            });
            arrCruisesFiltered = [];
            for (let i = 0; i < 5; i++) {
                arrCruisesFiltered[i] = sortedPriceArr[i];
            }
            break;
    
        default:
            sortingMethod = "";
            break;
    }
    console.log(sortingMethod);
    console.log(arrCruisesFiltered);
    return arrCruisesFiltered;
}