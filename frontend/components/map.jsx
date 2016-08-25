import React from 'react'

class Map extends React.Component {
  componentDidMount() {
    // create map
    const sflatlng = new google.maps.LatLng(37.7749, -122.4194)
    const mapOptions = {
      zoom: 12,
      center: sflatlng
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions)
    this.geocoder = new google.maps.Geocoder()
    this.geocoderLookup = {}
  }

  render () {
    this.placeMarkers()
    return (
      <div id="map"></div>
    )
  }

  placeMarkers() {
    // places markers on the map for every location in this.props.places
    this.resetMarkers()
    this.props.places.forEach(place => {
      if(this.geocoderLookup[place.locations]){
        this.createMarker(this.geocoderLookup[place.locations], place)
      } else {
        this.geocoder.geocode( { 'address': `${place.locations} SF` }, (results, status) => {
          if (status == 'OK') {
            this.createMarker(results[0].geometry.location, place)
            this.geocoderLookup[place.locations] = results[0].geometry.location
          } else {
            console.log('Geocode was not successful for the following reason: ' + status)
          }
        })
      }
    })
  }

  resetMarkers() {
    this.markers = this.markers || []
    this.markers.forEach(marker => marker.setMap(null))
    this.markers = []
    this.infowindows = []
  }

  createMarker(location, place) {
    const marker = new google.maps.Marker({
        map: this.map,
        position: location
    })
    const infowindow = this.createInfoWindow(place)
    marker.addListener('click', function() {
      infowindow.open(this.map, marker)
    })
    this.markers.push(marker)
    this.infowindows.push(infowindow)
  }

  createInfoWindow(place) {
    const contentString = `<p>Movie: ${place.title}</p>` +
      `<p>Actors: ${place.actor_1}, ${place.actor_2}, ${place.actor_3}</p>` +
      `<p>Director: ${place.director}</p>` +
      `<p>Release Year: ${place.release_year}</p>` +
      (place.fun_facts ? `Fun Facts: ${place.fun_facts}` : ``)
    const iw = new google.maps.InfoWindow({
      content: contentString
    })

    return iw
  }
}

export default Map
