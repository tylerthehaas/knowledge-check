import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "UPDATE_USER": {
      return action.payload.user;
    }
    case "UPDATE_ANSWER_ID": {
      const { answerId } = action.payload;
      return { ...state, answer: { ...state.answer, id: answerId } };
    }

    case "UPDATE_MEDIA_SIZE": {
      const { mediaSize } = action.payload;
      return { ...state, mediaSize };
    }

    case "UPDATE_SUBMISSION": {
      const { submissionResponse } = action.payload;
      return { ...state, answer: { ...state.answer, submissionResponse } };
    }

    case "RESET": {
      return action.payload.user;
    }

    default: {
      throw new Error(`unhandled action type: ${action.type}`);
    }
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    answer: {
      id: null,
      submitted: false,
    },
    mediaSize: "normal",
  });
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUserContext must be used within a UserProvider`);
  }

  const { state, dispatch } = context;

  return { user: state, dispatch };
}
