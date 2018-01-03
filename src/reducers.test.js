import reducer from './reducers';
import types from './types';

describe('ponies reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      poniesList: [],
      isLoading: false,
      errorMessage: ''
    });
  });

  it('should handle LOAD_DATA_STARTED', () => {
    expect(
      reducer([], {
        type: types.LOAD_DATA_STARTED
      })
    ).toEqual({
      isLoading: true
    });
  });

  it('should handle LOAD_DATA_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.LOAD_DATA_SUCCESS
      })
    ).toEqual({
      isLoading: false,
      errorMessage: '',
      poniesList: expect.any(Array)
    });
  });

  it('should handle LOAD_DATA_FAILED', () => {
    expect(
      reducer([], {
        type: types.LOAD_DATA_FAILED
      })
    ).toEqual({
      isLoading: false,
      errorMessage: expect.any(String),
      poniesList: expect.any(Array)
    });
  });

  it('should handle POST_DATA_STARTED', () => {
    expect(
      reducer([], {
        type: types.POST_DATA_STARTED
      })
    ).toEqual({
      isLoading: true,
      errorMessage: ''
    });
  });

  it('should handle POST_DATA_FAILED', () => {
    expect(
      reducer([], {
        type: types.POST_DATA_FAILED
      })
    ).toEqual({
      isLoading: false,
      errorMessage: expect.any(String)
    });
  });

  it('should handle POST_DATA_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.POST_DATA_SUCCESS
      })
    ).toEqual({
      isLoading: false,
      errorMessage: '',
      poniesList: expect.any(Array)
    });
  });

  it('should handle UPDATE_DATA_STARTED', () => {
    expect(
      reducer([], {
        type: types.UPDATE_DATA_STARTED
      })
    ).toEqual({
      isLoading: true,
      errorMessage: ''
    });
  });

  it('should handle UPDATE_DATA_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.UPDATE_DATA_SUCCESS
      })
    ).toEqual({
      isLoading: false,
      errorMessage: '',
      poniesList: expect.any(Array)
    });
  });

  it('should handle UPDATE_DATA_FAILED', () => {
    expect(
      reducer([], {
        type: types.UPDATE_DATA_FAILED
      })
    ).toEqual({
      isLoading: false,
      errorMessage: expect.any(String)
    });
  });

  it('should handle DELETE_DATA_STARTED', () => {
    expect(
      reducer([], {
        type: types.DELETE_DATA_STARTED
        //id: expect.any(Number)
      })
    ).toEqual({
      isLoading: true,
      errorMessage: ''
    });
  });

  it('should handle DELETE_DATA_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.DELETE_DATA_SUCCESS
      })
    ).toEqual({
      isLoading: false,
      errorMessage: '',
      poniesList: expect.any(Array)
    });
  });

  it('should handle DELETE_DATA_FAILED', () => {
    expect(
      reducer([], {
        type: types.DELETE_DATA_FAILED
      })
    ).toEqual({
      isLoading: false,
      errorMessage: expect.any(String)
    });
  });
  /*
  /*
    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });*/
});
