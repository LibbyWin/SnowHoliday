function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [{
        lat: 46.193646,   //france - Avariaz
        lng: 6.773301
    }, {
        lat: 47.136266,   // autria - St. anton
        lng: 10.268162
    }, {
        lat: 42.543433,  // Andorra - pas de la casa
        lng: 1.733681
    }, {
        lat: 50.122180,  //Canada - Whistler
        lng: -122.957228
    }, {
        lat: 51.177105,
        lng: -115.568315  // Canada - Banff
    }, {
        lat: 39.481223,
        lng: -106.066729  // USA - Breckenridge
    }, {
        lat: -44.872167,
        lng: 168.948805  //New Zealand - Mount Cardrona
    },   {
        lat: -44.850923,
        lng: 168.939220  // New Zealand - Treble cone
    },{
        lat: 43.069520,
        lng: 142.614962   //Japan - tomamu 
    },
    ];


    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
