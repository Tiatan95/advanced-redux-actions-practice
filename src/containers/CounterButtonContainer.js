import {connect} from 'react-redux'
import {increase,decrease} from '../actions/index'
import CounterButton from '../components/CounterButton'

function mapDispatchToProps(dispatch) {
    return {
        increase:function(txt) {
            let action = increase(txt)
            dispatch(action)
        },
        decrease:function(txt) {
            let action = decrease(txt)
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(CounterButton);