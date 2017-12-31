import types from '../types';

export default function poniesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_DATA_STARTED:
      return state;
    case types.LOAD_DATA_SUCCESS:
      const nextPoniesList = Array.prototype.concat(state, action.data);
      return nextPoniesList;

    case types.LOAD_DATA_FAILED:
      console.error(action.error);
      return state;

    case types.POST_DATA_SUCCESS:
      return [...state, { id: action.id, name: action.name }];

    case types.POST_DATA_FAILED:
      console.error(action.error);
      return state;

    case types.UPDATE_DATA_SUCCESS:
      return state.map(
        pony =>
          pony.id === action.id
            ? {
                ...pony,
                name: action.name
              }
            : pony
      );
    case types.UPDATE_DATA_FAILED:
      console.error(action.error);
      return state;

    case types.DELETE_DATA_SUCCESS:
      return state.filter(pony => action.id !== pony.id);

    case types.DELETE_DATA_FAILED:
      console.error(action.error);
      return state;
    default:
      return state;
  }
}
