import { useEffect } from "react";
import request from "../common/request";
import { useUserContext } from "../contexts/user";

export function useUser() {
  const { user, dispatch } = useUserContext();

  useEffect(() => {
    request
      .get("http://localhost:5000/user")
      .then((res) => res.json())
      .then((user) => {
        dispatch({ type: "UPDATE_USER", payload: { user } });
      });
  }, [dispatch]);

  const actions = {
    recordAnswerChange(event) {
      const answerId = Number(event.target.value);
      dispatch({ type: "UPDATE_ANSWER_ID", payload: { answerId } });
      request.post("http://localhost:5000/user", {
        body: { answerId },
      });
    },
    submitAnswer(event) {
      event.preventDefault();
      request
        .post("http://localhost:5000/user/answer", {
          body: { answerId: user.answer.id },
        })
        .then((res) => res.json())
        .then((data) => {
          const { submissionResponse } = data.answer;
          dispatch({
            type: "UPDATE_SUBMISSION",
            payload: { submissionResponse },
          });
        });
    },
    resetForm() {
      request
        .put("http://localhost:5000/user/reset")
        .then((res) => res.json())
        .then((user) => {
          dispatch({ type: "RESET", payload: { user } });
        });
    },
  };

  return [user, actions];
}
