import {connect} from 'react-redux'
import Container from '../components/Modal'
import { setIsLoading } from '../actions';

function mapStateToProps(state) {
    return {
        isLoading : state.isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setIsLoading:function(isLoading) {
            let action = setIsLoading(isLoading);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Container);