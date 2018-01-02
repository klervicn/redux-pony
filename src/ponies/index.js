import { connect } from 'react-redux';
import Ponies from './ponies';
import { updateData, deleteData } from '../actions';

function mapStateToProps(state) {
  return {
    poniesList: state.ponies.poniesList,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateClick: (id, name) => {
      dispatch(updateData(id, name));
    },
    onDeleteClick: id => {
      dispatch(deleteData(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ponies);
