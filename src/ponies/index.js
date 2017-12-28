import { connect } from 'react-redux';
import { Ponies } from './ponies';
import { updateData, deleteData } from '../actions';

function mapStateToProps(state) {
  console.log(state.ponies);
  return { poniesList: state.ponies }; // Pk .ponies ici ?
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateClick: (id, text) => {
      dispatch(updateData(id, text));
    },
    onDeleteClick: id => {
      dispatch(deleteData(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ponies);
