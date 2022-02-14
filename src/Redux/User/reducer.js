
export const getReducer = (state, action) => {
   return {
      ...state,
      user: state.user.setReducer,
   }
}

export const setReducer = (state, action) => {
    return {
        ...state, user: state.user
    }
}

