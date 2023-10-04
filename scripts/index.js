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
      description: "Experience the ultimate tropical getaway on this 14-day cruise. Explore the beautiful islands of Jamaica and Grand Cayman while enjoying luxurious amenities and breathtaking ocean views.",
      roundTrip: true
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
      description: "Embark on a 10-day journey through the enchanting Mediterranean. From the historic streets of Rome to the ancient wonders of Athens, this cruise offers a taste of European splendor.",
      roundTrip: true
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
      description: "Escape to the pink sand beaches of Bermuda on this 7-day cruise departing from New York. Relax in paradise and soak up the sun in the Atlantic Ocean.",
      roundTrip: false
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
      description: "Set sail from Miami on a 9-day Caribbean adventure. Discover the vibrant culture of Jamaica and the natural beauty of Grand Cayman.",
      roundTrip: true
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
      description: "Chase the mystical Northern Lights on a 12-day expedition from Reykjavik to St. Petersburg. Witness the breathtaking natural phenomenon and explore historic cities.",
      roundTrip: false
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
      description: "Experience paradise in the Pacific on a 16-day cruise. Visit the stunning islands of Bora Bora and Fiji, where white-sand beaches and turquoise waters await.",
      roundTrip: false
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
      description: "Explore the heart of the Amazon on an 11-day river expedition. Navigate the mighty Amazon River and discover the rich biodiversity of the rainforest.",
      roundTrip: false
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
      description: "Witness the wonders of the Arctic on a 14-day wildlife discovery. Encounter polar bears, seals, and stunning landscapes in the far north.",
      roundTrip: false
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
      description: "Sail through the picturesque Greek Isles on a 7-day odyssey. Explore the charming villages of Santorini and the lively beaches of Mykonos.",
      roundTrip: true
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
      description: "Embark on a 10-day wilderness adventure in Alaska. Witness calving glaciers and diverse wildlife in the stunning wilderness of the Last Frontier.",
      roundTrip: false
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
      description: "Discover the vibrant culture of South America on a 13-day journey. From Rio de Janeiro to Santiago, experience the rich history and flavors of the continent.",
      roundTrip: false
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
      description: "Cruise through the historic cities of the Baltic Sea on a 9-day exploration. Visit Stockholm, Helsinki, and Copenhagen for a taste of northern Europe.",
      roundTrip: false
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
      description: "Escape to the Bahamas for a quick 4-day getaway from Miami. Relax on beautiful beaches and explore the vibrant culture of Nassau and Freeport.",
      roundTrip: false
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
      description: "Enjoy a weekend escape to Key West and Havana. Discover the charm of these two iconic destinations just a short cruise from Miami.",
      roundTrip: false
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
      description: "Explore the stunning California coast on a 5-day journey from Los Angeles. Visit San Francisco and San Diego, two of California's most iconic cities.",
      roundTrip: false
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
      description: "Savor a taste of the Caribbean on a 3-day sampler cruise from Miami. Enjoy the vibrant culture of Cozumel and the natural beauty of the Cayman Islands.",
      roundTrip: false
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
      description: "Hop between the stunning Hawaiian Islands on a 5-day adventure. From Honolulu to Maui and Kauai, experience the beauty of Hawaii.",
      roundTrip: false
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
      description: "Escape for a weekend cruise to Ensenada and Cabo San Lucas. Relax on the Baja California coast and enjoy the vibrant atmosphere of these Mexican destinations.",
      roundTrip: true
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
      description: "Take a break on the sandy shores of the Caribbean. Explore the Bahamas and Cozumel on this 5-day beach getaway from Miami.",
      roundTrip: false
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
      description: "Discover the beauty of the Pacific coast on a 4-day coastal exploration. Cruise from San Francisco to Seattle and Victoria for breathtaking scenery.",
      roundTrip: false
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
      description: "Embark on a Mexican Riviera adventure from Los Angeles. Enjoy the vibrant culture of Cabo San Lucas and the tropical paradise of Puerto Vallarta.",
      roundTrip: true
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
      description: "Escape to the eastern Mediterranean on a 5-day journey. Explore the idyllic islands of Mykonos and Santorini from the ancient city of Athens.",
      roundTrip: true
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
      description: "Indulge in a quick weekend getaway to the Bahamas from Miami. Experience the beauty of Nassau and Freeport on this 3-day tropical escape.",
      roundTrip: true
  },
  // New cruises with single destinations
  {
      name: "Caribbean Paradise",
      tripCode: "C123",
      departurePoint: "Miami",
      destinations: ["St. Lucia"],
      departureYear: 2023,
      departureMonth: 9,
      departureDay: 30,
      tripDuration: 7,
      cost: 6000,
      description: "Discover the stunning beauty of St. Lucia on this 7-day cruise. Relax on pristine beaches and explore lush tropical landscapes.",
      roundTrip: false
  },
  {
      name: "Greece and Beyond",
      tripCode: "G777",
      departurePoint: "Athens",
      destinations: ["Crete"],
      departureYear: 2023,
      departureMonth: 8,
      departureDay: 15,
      tripDuration: 5,
      cost: 4500,
      description: "Experience the magic of Crete on a 5-day cruise from Athens. Explore ancient ruins and enjoy Mediterranean cuisine.",
      roundTrip: true
  },
  {
      name: "Caribbean Getaway",
      tripCode: "C456",
      departurePoint: "Miami",
      destinations: ["Dominican Republic"],
      departureYear: 2023,
      departureMonth: 11,
      departureDay: 10,
      tripDuration: 7,
      cost: 5500,
      description: "Escape to the Dominican Republic on this 7-day cruise from Miami. Enjoy white-sand beaches and vibrant culture.",
      roundTrip: false
  },
  {
      name: "Island Serenity",
      tripCode: "I234",
      departurePoint: "Miami",
      destinations: ["Barbados"],
      departureYear: 2024,
      departureMonth: 2,
      departureDay: 5,
      tripDuration: 5,
      cost: 4800,
      description: "Relax in the serenity of Barbados on a 5-day cruise from Miami. Unwind on beautiful beaches and savor local cuisine.",
      roundTrip: true
  },
  {
      name: "Alaskan Discovery",
      tripCode: "A567",
      departurePoint: "Anchorage",
      destinations: ["Juneau"],
      departureYear: 2024,
      departureMonth: 6,
      departureDay: 10,
      tripDuration: 7,
      cost: 6500,
      description: "Discover the wonders of Juneau on a 7-day cruise from Anchorage. Witness glaciers and diverse wildlife in Alaska's capital.",
      roundTrip: false
  },
  {
      name: "Tropical Hideaway",
      tripCode: "T345",
      departurePoint: "Miami",
      destinations: ["Bahamas"],
      departureYear: 2024,
      departureMonth: 7,
      departureDay: 15,
      tripDuration: 4,
      cost: 4200,
      description: "Escape to a tropical hideaway in the Bahamas on this 4-day cruise from Miami. Enjoy pristine beaches and clear blue waters.",
      roundTrip: true
  },
  {
      name: "Adriatic Delights",
      tripCode: "A888",
      departurePoint: "Venice",
      destinations: ["Dubrovnik"],
      departureYear: 2024,
      departureMonth: 8,
      departureDay: 20,
      tripDuration: 7,
      cost: 6800,
      description: "Explore the delights of Dubrovnik on a 7-day cruise from Venice. Wander through historic streets and savor Mediterranean cuisine.",
      roundTrip: false
  },
  {
      name: "Hawaiian Paradise",
      tripCode: "H777",
      departurePoint: "Honolulu",
      destinations: ["Maui"],
      departureYear: 2024,
      departureMonth: 9,
      departureDay: 10,
      tripDuration: 5,
      cost: 5500,
      description: "Experience Hawaiian paradise on a 5-day cruise from Honolulu to Maui. Relax on stunning beaches and enjoy local culture.",
      roundTrip: true
  },
  {
      name: "Caribbean Dreams",
      tripCode: "C789",
      departurePoint: "Miami",
      destinations: ["Aruba"],
      departureYear: 2024,
      departureMonth: 10,
      departureDay: 5,
      tripDuration: 7,
      cost: 6200,
      description: "Embark on a dreamy Caribbean escape to Aruba on this 7-day cruise from Miami. Enjoy beaches and water sports.",
      roundTrip: false
  },
  {
      name: "Tropical Getaway",
      tripCode: "T456",
      departurePoint: "Miami",
      destinations: ["Turks and Caicos"],
      departureYear: 2024,
      departureMonth: 11,
      departureDay: 10,
      tripDuration: 5,
      cost: 5300,
      description: "Get away to the tropical paradise of Turks and Caicos on this 5-day cruise from Miami. Relax on sandy beaches and explore coral reefs.",
      roundTrip: true
  }
];

$(document).ready(function() {    
  $("#vertical-navbar").hover(
    function() {
      $(this).css("width", "200px"); // Expand the navbar
      $(".link-text").css("display", "inline");
      $(".home-button").css({"width":"200px", "height":"200px"});
      firstRun = false;
    },
    function() {
      $(this).css("width", "120px"); // Keep the expanded width when hovering out
      $(".link-text").css("display", "none");
      $(".home-button").css({"width":"140px", "height":"140px"});
    }
  );


  $('#tempTable').find('.tbody').empty();
  let allDestinations = [];
  let currDestination ="";
  for (let i = 0; i < arrCruises.length; i++) {
    for (let j = 0; j < arrCruises[i].destinations.length; j++) {
      currDestination = arrCruises[i].destinations[j];
      if ((allDestinations.find(currDestination, null)) != null) {
        allDestinations.push(currDestination);
      }
    }
  }

  let currLocation ="";
  for (let i = 0; i < allDestinations.length; i++) {
    currLocation = allDestinations[i];
    // Open weather API call for getting the temperature
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + currLocation + "&appid=0c8a911e5c7f8e5a03991afe2075de21",
      success: function (data) {
        tempData = data;
        console.log(tempData);
      },
    }).done(function () {
      $('#tempTable').find('.tbody').append($('#locationTempEntry').html());
      let currentChild = $('#tempTable').children().eq(i);
      $(currentChild).find("#locationName").text(currLocation);  
      $(currentChild).find("#locationTemp").text(Math.round(tempData.main.temp - 273) + "°C");    
    });
  }
  
});  