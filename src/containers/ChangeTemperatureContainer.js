import {connect} from 'react-redux'
import {setTemp} from '../actions/index'
import ChangeTemperature from '../components/ChangeTemperature'

function mapDispatchToProps(dispatch) {
    return {
        set:function(num) {
            let action = setTemp(num);
            dispatch(action);
        }
    }   
}

export default connect(null,mapDispatchToProps)(ChangeTemperature);