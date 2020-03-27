import { createContext } from "react";
import { helperStore } from "../helper";

export const initialState = {
  store: {
    ...helperStore,
  },
  dispatch: () => { }
};

const Context = createContext(initialState);

export default Context;
