jQuery(function($){

var TALKDESIGN = window.TALKDESIGN || {};

/* ==================================================
   Map
================================================== */

TALKDESIGN.map = function(){
	if($('.map').length > 0)
	{

		$('.map').each(function(i,e){

			$map = $(e);
			$map_id = $map.attr('id');
			$map_lat = $map.attr('data-mapLat');
			$map_lon = $map.attr('data-mapLon');
			$map_zoom = parseInt($map.attr('data-mapZoom'));
			$map_title = $map.attr('data-mapTitle');



			var latlng = new google.maps.LatLng($map_lat, $map_lon);
			var options = {
				scrollwheel: false,
				draggable: true,
				zoomControl: true,
				disableDoubleClickZoom: false,
				disableDefaultUI: true,
				zoom: $map_zoom,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var styles = [
									  {
									    "elementType": "geometry",
									    "stylers": [
									      {
									        "color": "#282c34"
									      }
									    ]
									  },
									  {
									    "elementType": "labels.icon",
									    "stylers": [
									      {
									        "visibility": "off"
									      }
									    ]
									  },
									  {
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#757575"
									      }
									    ]
									  },
									  {
									    "elementType": "labels.text.stroke",
									    "stylers": [
									      {
									        "color": "#212121"
									      }
									    ]
									  },
									  {
									    "featureType": "administrative",
									    "elementType": "geometry",
									    "stylers": [
									      {
									        "color": "#757575"
									      }
									    ]
									  },
									  {
									    "featureType": "administrative.country",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#9e9e9e"
									      }
									    ]
									  },
									  {
									    "featureType": "administrative.land_parcel",
									    "stylers": [
									      {
									        "visibility": "off"
									      }
									    ]
									  },
									  {
									    "featureType": "administrative.locality",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#bdbdbd"
									      }
									    ]
									  },
									  {
									    "featureType": "poi",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#757575"
									      }
									    ]
									  },
									  {
									    "featureType": "poi.park",
									    "elementType": "geometry",
									    "stylers": [
									      {
									        "color": "#181818"
									      }
									    ]
									  },
									  {
									    "featureType": "poi.park",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#616161"
									      }
									    ]
									  },
									  {
									    "featureType": "poi.park",
									    "elementType": "labels.text.stroke",
									    "stylers": [
									      {
									        "color": "#1b1b1b"
									      }
									    ]
									  },
									  {
									    "featureType": "road",
									    "elementType": "geometry.fill",
									    "stylers": [
									      {
									        "color": "#2c2c2c"
									      }
									    ]
									  },
									  {
									    "featureType": "road",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#8a8a8a"
									      }
									    ]
									  },
									  {
									    "featureType": "road.arterial",
									    "elementType": "geometry",
									    "stylers": [
									      {
									        "color": "#373737"
									      }
									    ]
									  },
									  {
									    "featureType": "road.highway",
									    "elementType": "geometry",
									    "stylers": [
									      {
									        "color": "#3c3c3c"
									      }
									    ]
									  },
									  {
									    "featureType": "road.highway.controlled_access",
									    "elementType": "geometry",
									    "stylers": [
									      {
									        "color": "#4e4e4e"
									      }
									    ]
									  },
									  {
									    "featureType": "road.local",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#616161"
									      }
									    ]
									  },
									  {
									    "featureType": "transit",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#757575"
									      }
									    ]
									  },
									  {
									    "featureType": "water",
									    "elementType": "geometry",
									    "stylers": [
									      {
									        "color": "#000000"
									      }
									    ]
									  },
									  {
									    "featureType": "water",
									    "elementType": "labels.text.fill",
									    "stylers": [
									      {
									        "color": "#3d3d3d"
									      }
									    ]
									  }
									];

			var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

			var map = new google.maps.Map(document.getElementById($map_id), options);

			var image = '/images/common/marker-talkdesignandprint.png';
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: $map_title,
				icon: image
			});

			map.mapTypes.set('map_style', styledMap);
  			map.setMapTypeId('map_style');

			var contentString = '<p><strong>Talk Design & Print</strong><br>Capitol House<br>12-13 Bridge Street<br>Winchester<br>SO23 0HL<br><br>01962 864900<br>info@talkdesignandprint.com</p>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			google.maps.event.addListener(marker, 'click', function() {
      			infowindow.open(map,marker);
    		});

		});
	}
}




/* ==================================================
	Init
================================================== */

$(document).ready(function(){
	TALKDESIGN.map();

	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			//console.log('escape key pressed');
			$("nav").removeClass('expanded');
			$(".menu-button").removeClass('is-active');
		}
	});

});

});
