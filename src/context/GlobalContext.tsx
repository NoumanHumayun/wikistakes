import { createContext, Reducer as ReducerType, useReducer } from "react";
import { CONTEXT } from "helpers/constants";

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case CONTEXT.SET_SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: action.data,
      };
    case CONTEXT.SET_ROLES:
      return {
        ...state,
        roles: new Set(action.data),
      };
    default:
      return state;
  }
};

const initialState: GlobalState = {
  isSidebarOpen: false,
  roles: new Set(),
};

const GlobalState = ({ children }: any) => {
  
  const [state, dispatch] = useReducer<ReducerType<GlobalState, any>>(
    Reducer,
    initialState
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}{" "}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext<Context>({
  dispatch: undefined,
  state: initialState,
});

export default GlobalState;
