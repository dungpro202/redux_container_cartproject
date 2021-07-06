import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Message from './../components/Message';



function MessageContainer(props) {
    var{message}=props;
    return (
        <Message message={message}/>
    );

}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
    }
}






export default connect(mapStateToProps, null)(MessageContainer);
