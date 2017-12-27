import { connect } from 'react-redux';
import { Ponies } from './ponies';

function mapStateToProps(state) {
  console.log(state.ponies);
  return { poniesList: state.ponies }; // Pk .ponies ici ?
}

function mapDispatchToProps() {
  // Renvoie les props enfant
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Ponies);
