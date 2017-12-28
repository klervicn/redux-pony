// Acces uniquement a l'objet Pony qu'il représente
/*import { connect } from 'react-redux';
import { Pony } from './pony';
import { updateData, deleteData } from '../actions';

function mapStateToProps(state) {
  return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(Pony);
**/
