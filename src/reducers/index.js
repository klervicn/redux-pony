import types from '../types';

export default function poniesReducer(
  state = {
    poniesList: [],
    isLoading: false,
    errorMessage: ''
  },
  action
) {
  switch (action.type) {
    case types.LOAD_DATA_STARTED:
      return { ...state, isLoading: true };

    case types.LOAD_DATA_SUCCESS:
      const nextPoniesList = Array.prototype.concat(
        state.poniesList,
        action.data
      );
      return {
        ...state,
        poniesList: nextPoniesList,
        isLoading: false,
        errorMessage: ''
      };

    case types.LOAD_DATA_FAILED:
      console.error(action.error);
      return { ...state, isLoading: false, errorMessage: action.error };

    case types.POST_DATA_STARTED: {
      return { ...state, isLoading: true, errorMessage: '' };
    }

    case types.POST_DATA_SUCCESS:
      const nextDisplayPoniesList = [
        ...state.poniesList,
        { id: action.id, name: action.name }
      ];
      return {
        ...state,
        poniesList: nextDisplayPoniesList,
        isLoading: false,
        errorMessage: ''
      };

    case types.POST_DATA_FAILED:
      console.error(action.error);
      return { ...state, isLoading: false, errorMessage: action.error };

    case types.UPDATE_DATA_STARTED: {
      return { ...state, isLoading: true, errorMessage: '' };
    }

    case types.UPDATE_DATA_SUCCESS:
      const nextUpdatePoniesList = state.poniesList.map(
        pony =>
          pony.id === action.id
            ? {
                ...pony,
                name: action.name
              }
            : pony
      );

      return {
        ...state,
        poniesList: nextUpdatePoniesList,
        isLoading: false,
        errorMessage: ''
      };
    case types.UPDATE_DATA_FAILED:
      console.error(action.error);
      return { ...state, isLoading: false, errorMessage: action.error };

    case types.DELETE_DATA_STARTED: {
      return { ...state, isLoading: true, errorMessage: '' };
    }

    case types.DELETE_DATA_SUCCESS:
      const nextDeletePoniesList = state.poniesList.filter(
        pony => action.id !== pony.id
      );

      return {
        ...state,
        poniesList: nextDeletePoniesList,
        isLoading: false,
        errorMessage: ''
      };

    case types.DELETE_DATA_FAILED:
      console.error(action.error);
      return { ...state, isLoading: false, errorMessage: action.error };
    default:
      return state;
  }
}
