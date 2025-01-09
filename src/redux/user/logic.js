import { createLogic } from "redux-logic";
import {
  REQUEST_CONTACT,
  requestContactSuccess,
  REQUEST_ACCESS,
  requestAccessSuccess,
  requestAccessError,
  REQUEST_REGISTER_USER,
  REQUEST_USER,
  REQUEST_COUNT,
  requestCountSuccess,
} from ".";
const api = "https://api-o7.vercel.app/";
// const api = "http://localhost:3002";

export const handleRequestAccessLogic = () => {
  return createLogic({
    type: REQUEST_ACCESS,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      fetch(`${api}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestAccessSuccess({ user: res.user }));
          localStorage.setItem("user", JSON.stringify(res.user));
          localStorage.setItem("token", JSON.stringify(res.token));
        })
        .catch((err) => {
          console.log("err", err);
          dispatch(requestAccessError({ error: err }));
        })
        .finally(done);
    },
  });
};

export const handleGetUser = () => {
  return createLogic({
    type: REQUEST_USER,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      fetch(`${api}/auth/${credentials._id}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestAccessSuccess({ user: res.user }));
        })
        .catch((err) => {
          console.log("err", err);
          dispatch(requestAccessError({ error: err }));
        })
        .finally(done);
    },
  });
};

export const handleCount = () => {
  return createLogic({
    type: REQUEST_COUNT,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      console.log(credentials);
      fetch(
        `${api}/contact/count/${`${credentials.name.slice(
          0,
          3
        )}${credentials.cpf.slice(0, 3)}`.toLocaleUpperCase()}`
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestCountSuccess(res.count));
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(done);
    },
  });
};

export const handleRegisterUser = () => {
  return createLogic({
    type: REQUEST_REGISTER_USER,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      fetch(`${api}/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestAccessSuccess({ user: res.user }));
          localStorage.setItem("user", JSON.stringify(res.user));
          localStorage.setItem("token", JSON.stringify(res.token));
        })
        .catch((err) => {
          console.log("err", err);

          dispatch(requestAccessError({ error: err }));
        })
        .finally(done);
    },
  });
};

export const handleRequestContact = () => {
  return createLogic({
    type: REQUEST_CONTACT,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      console.log("credentials");
      fetch(`${api}/contact/create`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestContactSuccess(true));
        })
        .catch((err) => {
          console.log(err);
          done();
        })
        .finally(done);
    },
  });
};

const configureUserLogics = () => {
  return [
    handleRequestContact(),
    handleRequestAccessLogic(),
    handleRegisterUser(),
    handleGetUser(),
    handleCount(),
  ];
};

export default configureUserLogics;
