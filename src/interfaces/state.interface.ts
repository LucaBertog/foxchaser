export interface State {
  authApi: {};
  profileApi: {};
  reducer: {
    user: {
      token: string;
    };
  };
  chat: {
    selectedUser: string;
  };
}
