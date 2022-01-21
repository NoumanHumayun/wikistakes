interface GlobalState {
  isSidebarOpen: boolean;
  roles: Set<string>
  
}

interface Context {
  state: GlobalState
  dispatch: DispatchWithoutAction<any>
}