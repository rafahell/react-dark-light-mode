import React, { useReducer } from "react";
import Context from "./config";
import helperReducer, { helperStore } from '../helper';
import middleware from "./middleware";

const Store = props => {
  const [helperState, helperDispatch] = useReducer(helperReducer, helperStore);

  const trigglerDispatchs = action => {
    const dispatchs = [helperDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareContrutor = action => {
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers = {
    store: {
      ...helperState,
    },
    dispatch: middlewareContrutor
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
