import React from 'react';
import PropTypes from 'prop-types';
import Pony from '../pony/pony';
import { connect } from 'react-redux';
import * as PoniesActionsCreators from '../actions/poniesActions';
import { bindActionCreators } from 'redux';

/*function mapStateToProps(state) {
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
*/
class Ponies extends React.PureComponent {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(
      PoniesActionsCreators,
      dispatch
    );
  }
  render() {
    let { poniesList, isLoading, errorMessage } = this.props;
    return isLoading ? (
      <div>
        <p>Chargement en cours</p>
      </div>
    ) : (
      <div>
        <ul>
          {poniesList.map(pony => (
            <Pony
              key={pony.id}
              id={pony.id}
              name={pony.name}
              {...this.boundActionCreators}
            />
          ))}
        </ul>
        <p>{errorMessage}</p>
      </div>
    );
  }
}
/*
const Ponies = ({}) =>
  isLoading ? (
    <div>
      <p>Chargement en cours</p>
    </div>
  ) : (
    <div>
      <ul>
        {poniesList.map(pony => (
          <Pony
            key={pony.id}
            id={pony.id}
            name={pony.name}
            onUpdateClick={onUpdateClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
      <p>{errorMessage}</p>
    </div>
  );
*/
Ponies.proptypes = {
  poniesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  onUpdateClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default connect(state => ({
  poniesList: state.ponies.poniesList,
  isLoading: state.isLoading,
  errorMessage: state.errorMessage
}))(Ponies);
