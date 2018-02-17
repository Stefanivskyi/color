
let initialState = 'black';

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SET_ACTIVE_COLOR':
      return action.color;

    default:
      return state;
  }
};

