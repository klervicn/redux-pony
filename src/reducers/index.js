export default function poniesReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_DATA_STARTED':
      return state;
    case 'LOAD_DATA_SUCCESS':
      const data = action.data.data;
      const nextPoniesList = Array.prototype.concat(state, data);
      return nextPoniesList;

    case 'LOAD_DATA_FAILED':
      console.error(action.error);
      return state;

    case 'POST_DATA_SUCCESS':
      return [...state, { id: action.id, name: action.name }];

    case 'POST_DATA_FAILED':
      console.error(action.error);
      return state;

    case 'UPDATE_DATA_SUCCESS':
      return state.map(
        pony =>
          pony.id === action.id
            ? {
                ...pony,
                name: action.name
              }
            : pony
      );
    case 'UPDATE_DATA_FAILED':
      console.error(action.error);
      return state;

    case 'DELETE_DATA_SUCCESS':
      return state.filter(pony => action.id !== pony.id);

    case 'DELETE_DATA_FAILED':
      console.error(action.error);
      return state;
    default:
      return state;
  }
}
