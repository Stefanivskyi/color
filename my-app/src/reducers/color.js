
let initialState = [];

export default function color ( state = initialState, action) {

  switch (action.type) {

    case 'ACTIVE_COLOR':
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;

  }
};
