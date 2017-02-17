export function fetchUserRequest(state) {
  return { ...state, isUserLoading: true };
}

export function fetchUserSuccess(state, action) {
  if (!action.payload) {
    return state;
  }

  return { ...state, isUserLoading: false, user: action.payload };
}

export function fetchUserFailure(state) {
  return { ...state, isUserLoading: false };
}
