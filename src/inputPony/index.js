import { connect } from 'react-redux';
import { postData } from '../actions';
// import action add, marche aussi si c'est une fonction ??
import InputPony from './inputPony';

const mapStateToProps = state => {
  return {};
};

const mapDispatchStateToProps = dispatch => {
  return {
    onClick: text => {
      dispatch(postData(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStateToProps)(InputPony);
