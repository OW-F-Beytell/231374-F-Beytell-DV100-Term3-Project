const arrCruises = [
    {
        name: "Tropical Paradise Escape",
        tripCode: "C418",
        departurePoint: "Miami",
        destinations: ["Jamaica", "Grand Cayman"],
        departureYear: 2023,
        departureMonth: 7,
        departureDay: 15,
        tripDuration: 14
    },
    {
        name: "Mediterranean Magic",
        tripCode: "A327",
        departurePoint: "Barcelona",
        destinations: ["Rome", "Athens"],
        departureYear: 2023,
        departureMonth: 8,
        departureDay: 10,
        tripDuration: 10
    },
    {
        name: "Bermuda Bliss",
        tripCode: "N502",
        departurePoint: "New York",
        destinations: ["Bermuda", "Miami"],
        departureYear: 2023,
        departureMonth: 9,
        departureDay: 5,
        tripDuration: 7
    },
    {
        name: "Caribbean Cruise Adventure",
        tripCode: "C720",
        departurePoint: "Miami",
        destinations: ["Jamaica", "Grand Cayman"],
        departureYear: 2023,
        departureMonth: 10,
        departureDay: 2,
        tripDuration: 9
    },
    {
        name: "Northern Lights Expedition",
        tripCode: "A912",
        departurePoint: "Reykjavik",
        destinations: ["Oslo", "St. Petersburg"],
        departureYear: 2023,
        departureMonth: 11,
        departureDay: 15,
        tripDuration: 12
    },
    {
        name: "Pacific Island Paradise",
        tripCode: "P611",
        departurePoint: "Honolulu",
        destinations: ["Bora Bora", "Fiji"],
        departureYear: 2023,
        departureMonth: 12,
        departureDay: 20,
        tripDuration: 16
    },
    {
        name: "Amazon River Expedition",
        tripCode: "A825",
        departurePoint: "Manaus",
        destinations: ["Iquitos", "Leticia"],
        departureYear: 2024,
        departureMonth: 1,
        departureDay: 10,
        tripDuration: 11
    },
    {
        name: "Arctic Wildlife Discovery",
        tripCode: "N312",
        departurePoint: "Longyearbyen",
        destinations: ["Tromsø", "Reykjavik"],
        departureYear: 2024,
        departureMonth: 2,
        departureDay: 22,
        tripDuration: 14
    },
    {
        name: "Greek Isles Odyssey",
        tripCode: "G521",
        departurePoint: "Athens",
        destinations: ["Santorini", "Mykonos"],
        departureYear: 2024,
        departureMonth: 3,
        departureDay: 8,
        tripDuration: 7
    },
    {
        name: "Alaskan Wilderness Explorer",
        tripCode: "A740",
        departurePoint: "Juneau",
        destinations: ["Anchorage", "Glacier Bay"],
        departureYear: 2024,
        departureMonth: 4,
        departureDay: 20,
        tripDuration: 10
    },
    {
        name: "South American Discovery",
        tripCode: "S612",
        departurePoint: "Rio de Janeiro",
        destinations: ["Buenos Aires", "Santiago"],
        departureYear: 2024,
        departureMonth: 5,
        departureDay: 12,
        tripDuration: 13
    },
    {
        name: "Baltic Sea Explorer",
        tripCode: "B423",
        departurePoint: "Stockholm",
        destinations: ["Helsinki", "Copenhagen"],
        departureYear: 2024,
        departureMonth: 6,
        departureDay: 7,
        tripDuration: 9
    },
    {
        name: "Bahamas Getaway",
        tripCode: "B105",
        departurePoint: "Miami",
        destinations: ["Nassau", "Freeport"],
        departureYear: 2023,
        departureMonth: 7,
        departureDay: 2,
        tripDuration: 4
    },
    {
        name: "Weekend Escape to Key West",
        tripCode: "K220",
        departurePoint: "Miami",
        destinations: ["Key West", "Havana"],
        departureYear: 2023,
        departureMonth: 8,
        departureDay: 18,
        tripDuration: 3
    },
    {
        name: "California Coast Explorer",
        tripCode: "C610",
        departurePoint: "Los Angeles",
        destinations: ["San Francisco", "San Diego"],
        departureYear: 2023,
        departureMonth: 9,
        departureDay: 5,
        tripDuration: 5
    },
    {
        name: "Caribbean Sampler",
        tripCode: "S315",
        departurePoint: "Miami",
        destinations: ["Cozumel", "Cayman Islands"],
        departureYear: 2023,
        departureMonth: 10,
        departureDay: 12,
        tripDuration: 3
    },
    {
        name: "Hawaiian Island Hopper",
        tripCode: "H825",
        departurePoint: "Honolulu",
        destinations: ["Maui", "Kauai"],
        departureYear: 2023,
        departureMonth: 12,
        departureDay: 12,
        tripDuration: 5
    },
    {
        name: "Weekend Cruise to Ensenada",
        tripCode: "E405",
        departurePoint: "Los Angeles",
        destinations: ["Ensenada", "Cabo San Lucas"],
        departureYear: 2024,
        departureMonth: 1,
        departureDay: 20,
        tripDuration: 4
    },
    {
        name: "Caribbean Beach Break",
        tripCode: "B515",
        departurePoint: "Miami",
        destinations: ["Bahamas", "Cozumel"],
        departureYear: 2024,
        departureMonth: 2,
        departureDay: 14,
        tripDuration: 5
    },
    {
        name: "Pacific Coastal Explorer",
        tripCode: "P412",
        departurePoint: "San Francisco",
        destinations: ["Seattle", "Victoria"],
        departureYear: 2024,
        departureMonth: 3,
        departureDay: 22,
        tripDuration: 4
    },
    {
        name: "Mexican Riviera Adventure",
        tripCode: "M720",
        departurePoint: "Los Angeles",
        destinations: ["Cabo San Lucas", "Puerto Vallarta"],
        departureYear: 2024,
        departureMonth: 4,
        departureDay: 15,
        tripDuration: 5
    },
    {
        name: "Eastern Mediterranean Escape",
        tripCode: "E922",
        departurePoint: "Athens",
        destinations: ["Mykonos", "Santorini"],
        departureYear: 2024,
        departureMonth: 5,
        departureDay: 10,
        tripDuration: 5
    },
    {
        name: "Weekend Getaway to the Bahamas",
        tripCode: "B325",
        departurePoint: "Miami",
        destinations: ["Nassau", "Freeport"],
        departureYear: 2024,
        departureMonth: 6,
        departureDay: 25,
        tripDuration: 3
    }
];

$(document).ready(function () {
    console.log("hello world");

    $("#cruiseTable").empty();
    loadCruises(arrCruises);
});

function loadCruises(arrayToLoad) {
    for (let i = 0; i < arrayToLoad.length; i++) {
        currCruise = arrayToLoad[i];
        console.log(currCruise);

        // 1: Select the plants container add the plant card to it
        $("#cruiseTable").append($("#cruiseTableEntry").html());

        // 2: Create a variable that contains the most recently added plant card
        let currentChild = $("#cruiseTable").children().eq(i);

        // 3: Set the content for the current plant card from the plant array
        $(currentChild).find("#cruiseCode").text(currCruise.tripCode);
        $(currentChild).find("#cruiseDepartPoint").text(currCruise.departurePoint);
        $(currentChild).find("#cruiseDestinations").text(myToString(currCruise.destinations));
        $(currentChild).find("#cruiseDepartureDate").text(currCruise.departureYear + "/" + currCruise.departureMonth + "/" + currCruise.departureDay);
        $(currentChild).find("#cruiseDuration").text(currCruise.tripDuration + " days");
        

        // // 4: Hide the description text from the curent card
        // $(currentChild).find("#descriptionText").hide();
        // $(currentChild).find("#originTemp").hide();
    }
}

function entrySelect(entry) {
    console.log(entry);
    code = entry.getElementByID('.tripCode');
    // for (let i = 0; i < arrCruises.length; i++) {
    //     currCruise = arrCruises[i];
    //     if (currCruise.tripCode === code) {
    //         console.log(currCruise.name);
    //     }
    // }
}

$("#cruiseTable").on("click-row.bs.table", "tr", function () {
    console.log("Clicked");

});

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

/* <template id="cruiseTableEntry">
      <tr>
        <td id="cruiseCode">C418</td>
        <td id="cruiseDepartPoint">Cape Town</td>
        <td id="cruiseDestinations">Seychelles, Maldives</td>
        <td id="cruiseDepartureDate">2023/07/15</td>
        <td id="cruiseDuration">14 days</td>
      </tr>
    </template> */

// {
//     name: "Tropical Paradise Escape",
//     tripCode: "C418",
//     departurePoint: "Miami",
//     destinations: ["Jamaica", "Grand Cayman"],
//     departureYear: 2023,
//     departureMonth: 7,
//     departureDay: 15,
//     tripDuration: 14
// },