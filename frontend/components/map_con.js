import { connect } from 'react-redux'
import Map from './map'
import { updateQuery } from './actions'

const MapStateToProps = (state) => ({
  places: state.places
})

const MapDispatchToProps = (dispatch) => ({
})

export default connect(MapStateToProps, MapDispatchToProps)(Map)