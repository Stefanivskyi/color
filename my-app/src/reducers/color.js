
let initialState = '';

export default function activeColor ( state = initialState, action) {

  switch (action.type) {

    case 'ACTIVE_COLOR':
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};
