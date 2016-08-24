import { connect } from 'react-redux'
import Search from './search'
import { updateQuery } from './actions'

const MapStateToProps = (state) => ({

})

const MapDispatchToProps = (dispatch) => ({
  updateQuery: query => dispatch(updateQuery(query))
})

export default connect(MapStateToProps, MapDispatchToProps)(Search)