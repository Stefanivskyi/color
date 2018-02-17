let initialState = 'black';

export default (state = initialState, action) => {

  switch (action.type) {

    case 'SET_BG_COLOR':
      return action.color;

    default:
      return state;
  }
};
