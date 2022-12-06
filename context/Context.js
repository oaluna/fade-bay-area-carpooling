import React from "react";
import { DestinationReducer, OriginReducer } from "../reducers/Reducers";

export const DestinationContext = React.createContext();
export const OriginContext = React.createContext();

export const DestinationContextProvider = (props) => {
  const [destination, dispatchDestination] = React.useReducer(
    DestinationReducer,
    {
      latitude: null,
      longitude: null,
      address: "",
      name: "",
    }
  );
  return (
    <DestinationContext.Provider value={{ destination, dispatchDestination }}>
      {props.children}
    </DestinationContext.Provider>
  );
};

export const OriginContextProvider = (props) => {
  const [origin, dispatchOrigin] = React.useReducer(OriginReducer, {
    latitude: null,
    longitude: null,
    address: "",
    name: "",
  });
  return (
    <OriginContext.Provider value={{ origin, dispatchOrigin }}>
      {props.children}
    </OriginContext.Provider>
  );
};
