const arrCruises = [
    {
        name: "Tropical Paradise Escape",
        tripCode: "C418",
        departurePoint: "Miami",
        destinations: ["Jamaica", "Grand Cayman"],
        departureYear: 2023,
        departureMonth: 7,
        departureDay: 15,
        tripDuration: 14,
        cost: 10500,
        description: "Experience the ultimate tropical getaway on this 14-day cruise. Explore the beautiful islands of Jamaica and Grand Cayman while enjoying luxurious amenities and breathtaking ocean views."
    },
    {
        name: "Mediterranean Magic",
        tripCode: "A327",
        departurePoint: "Barcelona",
        destinations: ["Rome", "Athens"],
        departureYear: 2023,
        departureMonth: 8,
        departureDay: 10,
        tripDuration: 10,
        cost: 8500,
        description: "Embark on a 10-day journey through the enchanting Mediterranean. From the historic streets of Rome to the ancient wonders of Athens, this cruise offers a taste of European splendor."
    },
    {
        name: "Bermuda Bliss",
        tripCode: "N502",
        departurePoint: "New York",
        destinations: ["Bermuda", "Miami"],
        departureYear: 2023,
        departureMonth: 9,
        departureDay: 5,
        tripDuration: 7,
        cost: 6500,
        description: "Escape to the pink sand beaches of Bermuda on this 7-day cruise departing from New York. Relax in paradise and soak up the sun in the Atlantic Ocean."
    },
    {
        name: "Caribbean Cruise Adventure",
        tripCode: "C720",
        departurePoint: "Miami",
        destinations: ["Jamaica", "Grand Cayman"],
        departureYear: 2023,
        departureMonth: 10,
        departureDay: 2,
        tripDuration: 9,
        cost: 7200,
        description: "Set sail from Miami on a 9-day Caribbean adventure. Discover the vibrant culture of Jamaica and the natural beauty of Grand Cayman."
    },
    {
        name: "Northern Lights Expedition",
        tripCode: "A912",
        departurePoint: "Reykjavik",
        destinations: ["Oslo", "St. Petersburg"],
        departureYear: 2023,
        departureMonth: 11,
        departureDay: 15,
        tripDuration: 12,
        cost: 9800,
        description: "Chase the mystical Northern Lights on a 12-day expedition from Reykjavik to St. Petersburg. Witness the breathtaking natural phenomenon and explore historic cities."
    },
    {
        name: "Pacific Island Paradise",
        tripCode: "P611",
        departurePoint: "Honolulu",
        destinations: ["Bora Bora", "Fiji"],
        departureYear: 2023,
        departureMonth: 12,
        departureDay: 20,
        tripDuration: 16,
        cost: 12200,
        description: "Experience paradise in the Pacific on a 16-day cruise. Visit the stunning islands of Bora Bora and Fiji, where white-sand beaches and turquoise waters await."
    },
    {
        name: "Amazon River Expedition",
        tripCode: "A825",
        departurePoint: "Manaus",
        destinations: ["Iquitos", "Leticia"],
        departureYear: 2024,
        departureMonth: 1,
        departureDay: 10,
        tripDuration: 11,
        cost: 8900,
        description: "Explore the heart of the Amazon on an 11-day river expedition. Navigate the mighty Amazon River and discover the rich biodiversity of the rainforest."
    },
    {
        name: "Arctic Wildlife Discovery",
        tripCode: "N312",
        departurePoint: "Longyearbyen",
        destinations: ["Tromsø", "Reykjavik"],
        departureYear: 2024,
        departureMonth: 2,
        departureDay: 22,
        tripDuration: 14,
        cost: 10500,
        description: "Witness the wonders of the Arctic on a 14-day wildlife discovery. Encounter polar bears, seals, and stunning landscapes in the far north."
    },
    {
        name: "Greek Isles Odyssey",
        tripCode: "G521",
        departurePoint: "Athens",
        destinations: ["Santorini", "Mykonos"],
        departureYear: 2024,
        departureMonth: 3,
        departureDay: 8,
        tripDuration: 7,
        cost: 6200,
        description: "Sail through the picturesque Greek Isles on a 7-day odyssey. Explore the charming villages of Santorini and the lively beaches of Mykonos."
    },
    {
        name: "Alaskan Wilderness Explorer",
        tripCode: "A740",
        departurePoint: "Juneau",
        destinations: ["Anchorage", "Glacier Bay"],
        departureYear: 2024,
        departureMonth: 4,
        departureDay: 20,
        tripDuration: 10,
        cost: 7800,
        description: "Embark on a 10-day wilderness adventure in Alaska. Witness calving glaciers and diverse wildlife in the stunning wilderness of the Last Frontier."
    },
    {
        name: "South American Discovery",
        tripCode: "S612",
        departurePoint: "Rio de Janeiro",
        destinations: ["Buenos Aires", "Santiago"],
        departureYear: 2024,
        departureMonth: 5,
        departureDay: 12,
        tripDuration: 13,
        cost: 9400,
        description: "Discover the vibrant culture of South America on a 13-day journey. From Rio de Janeiro to Santiago, experience the rich history and flavors of the continent."
    },
    {
        name: "Baltic Sea Explorer",
        tripCode: "B423",
        departurePoint: "Stockholm",
        destinations: ["Helsinki", "Copenhagen"],
        departureYear: 2024,
        departureMonth: 6,
        departureDay: 7,
        tripDuration: 9,
        cost: 7100,
        description: "Cruise through the historic cities of the Baltic Sea on a 9-day exploration. Visit Stockholm, Helsinki, and Copenhagen for a taste of northern Europe."
    },
    {
        name: "Bahamas Getaway",
        tripCode: "B105",
        departurePoint: "Miami",
        destinations: ["Nassau", "Freeport"],
        departureYear: 2023,
        departureMonth: 7,
        departureDay: 2,
        tripDuration: 4,
        cost: 4500,
        description: "Escape to the Bahamas for a quick 4-day getaway from Miami. Relax on beautiful beaches and explore the vibrant culture of Nassau and Freeport."
    },
    {
        name: "Weekend Escape to Key West",
        tripCode: "K220",
        departurePoint: "Miami",
        destinations: ["Key West", "Havana"],
        departureYear: 2023,
        departureMonth: 8,
        departureDay: 18,
        tripDuration: 3,
        cost: 3200,
        description: "Enjoy a weekend escape to Key West and Havana. Discover the charm of these two iconic destinations just a short cruise from Miami."
    },
    {
        name: "California Coast Explorer",
        tripCode: "C610",
        departurePoint: "Los Angeles",
        destinations: ["San Francisco", "San Diego"],
        departureYear: 2023,
        departureMonth: 9,
        departureDay: 5,
        tripDuration: 5,
        cost: 5500,
        description: "Explore the stunning California coast on a 5-day journey from Los Angeles. Visit San Francisco and San Diego, two of California's most iconic cities."
    },
    {
        name: "Caribbean Sampler",
        tripCode: "S315",
        departurePoint: "Miami",
        destinations: ["Cozumel", "Cayman Islands"],
        departureYear: 2023,
        departureMonth: 10,
        departureDay: 12,
        tripDuration: 3,
        cost: 3800,
        description: "Savor a taste of the Caribbean on a 3-day sampler cruise from Miami. Enjoy the vibrant culture of Cozumel and the natural beauty of the Cayman Islands."
    },
    {
        name: "Hawaiian Island Hopper",
        tripCode: "H825",
        departurePoint: "Honolulu",
        destinations: ["Maui", "Kauai"],
        departureYear: 2023,
        departureMonth: 12,
        departureDay: 12,
        tripDuration: 5,
        cost: 4900,
        description: "Hop between the stunning Hawaiian Islands on a 5-day adventure. From Honolulu to Maui and Kauai, experience the beauty of Hawaii."
    },
    {
        name: "Weekend Cruise to Ensenada",
        tripCode: "E405",
        departurePoint: "Los Angeles",
        destinations: ["Ensenada", "Cabo San Lucas"],
        departureYear: 2024,
        departureMonth: 1,
        departureDay: 20,
        tripDuration: 4,
        cost: 4200,
        description: "Escape for a weekend cruise to Ensenada and Cabo San Lucas. Relax on the Baja California coast and enjoy the vibrant atmosphere of these Mexican destinations."
    },
    {
        name: "Caribbean Beach Break",
        tripCode: "B515",
        departurePoint: "Miami",
        destinations: ["Bahamas", "Cozumel"],
        departureYear: 2024,
        departureMonth: 2,
        departureDay: 14,
        tripDuration: 5,
        cost: 4700,
        description: "Take a break on the sandy shores of the Caribbean. Explore the Bahamas and Cozumel on this 5-day beach getaway from Miami."
    },
    {
        name: "Pacific Coastal Explorer",
        tripCode: "P412",
        departurePoint: "San Francisco",
        destinations: ["Seattle", "Victoria"],
        departureYear: 2024,
        departureMonth: 3,
        departureDay: 22,
        tripDuration: 4,
        cost: 4100,
        description: "Discover the beauty of the Pacific coast on a 4-day coastal exploration. Cruise from San Francisco to Seattle and Victoria for breathtaking scenery."
    },
    {
        name: "Mexican Riviera Adventure",
        tripCode: "M720",
        departurePoint: "Los Angeles",
        destinations: ["Cabo San Lucas", "Puerto Vallarta"],
        departureYear: 2024,
        departureMonth: 4,
        departureDay: 15,
        tripDuration: 5,
        cost: 4900,
        description: "Embark on a Mexican Riviera adventure from Los Angeles. Enjoy the vibrant culture of Cabo San Lucas and the tropical paradise of Puerto Vallarta."
    },
    {
        name: "Eastern Mediterranean Escape",
        tripCode: "E922",
        departurePoint: "Athens",
        destinations: ["Mykonos", "Santorini"],
        departureYear: 2024,
        departureMonth: 5,
        departureDay: 10,
        tripDuration: 5,
        cost: 5200,
        description: "Escape to the eastern Mediterranean on a 5-day journey. Explore the idyllic islands of Mykonos and Santorini from the ancient city of Athens."
    },
    {
        name: "Weekend Getaway to the Bahamas",
        tripCode: "B325",
        departurePoint: "Miami",
        destinations: ["Nassau", "Freeport"],
        departureYear: 2024,
        departureMonth: 6,
        departureDay: 25,
        tripDuration: 3,
        cost: 3600,
        description: "Indulge in a quick weekend getaway to the Bahamas from Miami. Experience the beauty of Nassau and Freeport on this 3-day tropical escape."
    }
];

let cruisesInCart = [];


$(document).ready(function () {
    $("#foldColumn").hide();
    $("#cruiseTable").empty();
    loadCruises(arrCruises);
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
    for (let i = 0; i < arrayToLoad.length; i++) {
        currCruise = arrayToLoad[i];

        $("#cruiseTable").append($("#cruiseTableEntry").html());

        let currentChild = $("#cruiseTable").children().eq(i);

        $(currentChild).find("#cruiseCode").text(currCruise.tripCode);
        $(currentChild).find("#cruiseDepartPoint").text(currCruise.departurePoint);
        $(currentChild).find("#cruiseDestinations").text(myToString(currCruise.destinations));
        $(currentChild).find("#cruiseDepartureDate").text(currCruise.departureYear + "/" + currCruise.departureMonth + "/" + currCruise.departureDay);
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
    $('#foldColumn').find('#cruiseDepartDate').html('<strong>Departure Date:</strong> ' + correctElement.departureYear + "/" + correctElement.departureMonth + "/" + correctElement.departureDay);
    $('#foldColumn').find('#cruiseRoute').html('<strong>Destinations:</strong> ' + myToString(correctElement.destinations));
    $('#foldColumn').find('#cruiseDuration').html('<strong>Cruise Duration:</strong> ' + correctElement.tripDuration + ' days');
    $('#foldColumn').find('#cruiseCost').html('<strong>Ticket Cost:</strong> R' + correctElement.cost.toFixed(2));
   
    
    if (!myInArray(correctElement, cruisesInCart)) {
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
        saveToLocal();
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

function saveToLocal() {
    let listCruisesString = cruisesInCart;

    let data = JSON.stringify(listCruisesString);
    localStorage.setItem('cruises', data);
}

function goToPurchasePage(params) {
    
}