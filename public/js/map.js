function flip() {
  $('.card').toggleClass('flipped');
}

var map;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: -23.5629,
                    lng: -46.6544
                },
                zoom: 15
            });
            let home = new google.maps.LatLng(-23.5629, -46.6544);
            let locations = [
                ['First Shoppe', -23.561414, -46.6580706],
                ['Second Shoppe', -23.5629, -46.6544],
                ['Third Shoppe', -23.558976, -46.6625623]
            ]

            for (i = 0; i < locations.length; i++) {
                homeMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    title: locations[i][0],
                    map: map
                });
            }
        }