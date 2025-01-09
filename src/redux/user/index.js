import { createActions, handleActions } from "redux-actions";

export const REQUEST_ACCESS = "REQUEST_ACCESS";
export const REQUEST_ACCESS_SUCCESS = "REQUEST_ACCESS_SUCCESS";
export const REQUEST_ACCESS_ERROR = "REQUEST_ACCESS_ERROR";

export const {
  requestAccess,
  requestAccessSuccess,
  requestAccessError,
} = createActions({
  [REQUEST_ACCESS]: (credentials) => ({ credentials }),
  [REQUEST_ACCESS_SUCCESS]: ({ user }) => ({ user }),
  [REQUEST_ACCESS_ERROR]: (error) => ({ error }),
});

export const REQUEST_REGISTER_USER = "REQUEST_REGISTER_USER";
export const { requestRegisterUser } = createActions({
  [REQUEST_REGISTER_USER]: (credentials) => ({ credentials }),
});

export const REQUEST_LOGOUT_USER = "REQUEST_LOGOUT_USER";
export const { requestLogoutUser } = createActions({
  [REQUEST_LOGOUT_USER]: (data) => ({ data }),
});

export const REQUEST_FORM = "REQUEST_FORM";

export const { requestForm } = createActions({
  [REQUEST_FORM]: (credentials) => credentials,
});

export const REQUEST_CONTACT = "REQUEST_CONTACT";
export const REQUEST_CONTACT_SUCCESS = "REQUEST_CONTACT_SUCCESS";

export const { requestContact, requestContactSuccess } = createActions({
  [REQUEST_CONTACT]: (credentials) => ({ credentials }),
  [REQUEST_CONTACT_SUCCESS]: (boolean) => boolean,
});

export const REQUEST_USER = "REQUEST_USER";

export const { requestUser } = createActions({
  [REQUEST_USER]: (credentials) => ({ credentials }),
});

export const REQUEST_COUNT = "REQUEST_COUNT";
export const REQUEST_COUNT_SUCCESS = "REQUEST_COUNT_SUCCESS";

export const { requestCount, requestCountSuccess } = createActions({
  [REQUEST_COUNT]: (credentials) => ({ credentials }),
  [REQUEST_COUNT_SUCCESS]: (boolean) => boolean,
});

export const INITIAL_STATE = {
  form: {},
  createSuccess: false,
  count: "",
  user: {},
};

const reducer = handleActions(
  {
    [REQUEST_ACCESS_SUCCESS]: (state, { payload: { user } }) => {
      return {
        ...state,
        user: user && user._id ? user : state.user,
      };
    },
    [REQUEST_LOGOUT_USER]: (state) => {
      return {
        ...state,
        user: {},
      };
    },
    [REQUEST_FORM]: (state, { payload }) => {
      return {
        ...state,
        form: payload,
      };
    },
    [REQUEST_COUNT_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        count: payload,
      };
    },
    [REQUEST_CONTACT_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        createSuccess: payload,
      };
    },
  },
  INITIAL_STATE
);

export default reducer;
