import { actions } from '../actions';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.PROFILE_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.profile.PROFILE_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action?.data,
      };
    }

    default: {
      return state;
    }
  }
};

export { initialState, ProfileReducer };
