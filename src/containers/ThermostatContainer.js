import {connect} from 'react-redux'
import Thermostat from '../components/Thermostat'

function mapStatetoProps(state) {
    return {
        temp : state.currentTemp
    }
}

export default connect(mapStatetoProps)(Thermostat);