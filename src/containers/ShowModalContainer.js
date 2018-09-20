import {connect} from 'react-redux'
import {setIsLoading} from '../actions/index'
import ShowModal from '../components/ShowModal'

function mapDispatchToProps(dispatch){
    return {
        setIsLoading:function(bool){
            let action = setIsLoading(bool);
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(ShowModal);