import { EMAIL_DATA } from "../actions/types";

const initialState = {
  email: "",
};

const AccountDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_DATA:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default AccountDataReducer;
