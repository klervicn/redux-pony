import { connect } from 'react-redux';
import { postData } from '../actions';
// import action add, marche aussi si c'est une fonction ??
import InputPony from './inputPony';

const mapStateToProps = state => {
  return { nextId: state.ponies.length + 1 };
};

const mapDispatchStateToProps = dispatch => {
  return {
    onClick: (id, text) => {
      dispatch(postData(id, text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStateToProps)(InputPony);
