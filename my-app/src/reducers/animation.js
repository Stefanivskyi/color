let initialState = false;

export default (state = initialState, action) => {

  switch (action.type) {

    case 'SET_ANIMATION':
      return action.payload;

    default:
      return state;
  }
};
