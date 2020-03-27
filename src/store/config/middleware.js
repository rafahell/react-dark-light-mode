// import { LOGOUT, LOGIN, UNAUTHORIZED } from "../auth";
// import { NEW_REMINDER } from '../helper';

const middleware = action => next => {
  // if (action.type === UNAUTHORIZED) {
  //   console.log(action);
  // }

  // if (action.type === LOGOUT) {
  //   console.log(action);
  // }

  // if (action.type === RESIZE_WINDOW) {
  //   console.log(action);
  // }

  next(action);
};

export default middleware;