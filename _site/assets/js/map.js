var myCenter=new google.maps.LatLng(-17.3942149,-66.165239);
    function initialize()
    {
        var mapProp = {
            center:myCenter,
            scrollwheel: false,
            zoom:17,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker=new google.maps.Marker({
            position:myCenter,
			map: map,
			draggable: true,
            animation: google.maps.Animation.DROP,
            position: { lat: -17.3942149, lng: -66.165239 },
        });
		marker.addListener("click", toggleBounce);
		var styles =  [
			{
				"stylers": [
					{
						"hue": "#baf4c4"
					},
					{
						"saturation": 10
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#effefd"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			}
		];
        map.setOptions({styles: styles});
		marker.setMap(map);
		function toggleBounce() {
			if (marker.getAnimation() !== null) {
			  marker.setAnimation(null);
			} else {
			  marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		  }
		
    }
google.maps.event.addDomListener(window, 'load', initialize);

	