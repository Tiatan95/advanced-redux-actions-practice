import {connect} from 'react-redux'
import {setVideoScale} from '../actions/index'
import ScaleVideo from '../components/ScaleVideo'

function mapDispatchToProps(dispatch) {
    return {
        set:function(num){
            let action = setVideoScale(num);
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(ScaleVideo);