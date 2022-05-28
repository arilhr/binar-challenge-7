import { EMAIL_DATA } from "./types";

function SetEmail(email = "") {
  return (dispatch) => {
    dispatch({
      type: EMAIL_DATA,
      payload: {
        email,
      },
    });
  };
}

export { SetEmail };
