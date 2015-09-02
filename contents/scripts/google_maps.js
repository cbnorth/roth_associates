jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        scrollwheel: false
    };

    var zoom = null;

    if ($(window).width() < 768) {
        zoom = 3;
    } else {
        zoom = 4;
    }

    console.log(zoom);
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(35);
        
    // Multiple Markers
    var markers = [
        ['Roth Associate, Houston', 29.7626506,-95.3647347, '/assets/images/map_marker.png'],
        ['Roth Associates, Seattle', 47.6010539,-122.334648, '/assets/images/map_marker.png'],
        ['Roth Associates, New York', 40.7033127,-73.979681, '/assets/images/blank_marker.png']
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Houston Office</h3>' +
        '<p>440 Louisiana St, Suite 1900<br>Houston, TX 77002<br> <a href="https://www.google.com/maps/place/440+Louisiana+St+%231900,+Houston,+TX+77002/data=!4m2!3m1!1s0x8640bf305d70a28f:0xdbeb4f628267a8f4?sa=X&ved=0CB4Q8gEwAGoVChMIud7G9KeOxwIVwzaICh1DCQeU" target="_blank">get directions</a></div>'],
        ['<div class="info_content">' +
        '<h3>Seattle Office</h3>' +
        '<p>119 First Avenue South, Suite 500<br>Seattle, WA 98104<br> <a href="https://www.google.com/maps/place/440+Louisiana+St+%231900,+Houston,+TX+77002/data=!4m2!3m1!1s0x8640bf305d70a28f:0xdbeb4f628267a8f4?sa=X&ved=0CB4Q8gEwAGoVChMIud7G9KeOxwIVwzaICh1DCQeU" target="_blank">get directions</a></div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    //marker icon
    var image = {
        url: '/assets/images/map_marker.png',
        size: new google.maps.Size(20, 20),
      };
    
    console.log(markers);

    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: markers[i][3],
            size: new google.maps.Size(20, 20)
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(zoom);
        google.maps.event.removeListener(boundsListener);
    });

    google.maps.event.addDomListener(window, 'resize', function(event) {
        initialize();
    });
    
}