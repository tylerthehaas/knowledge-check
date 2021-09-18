import { css, cx } from "@emotion/css";
import { useUser } from "../hooks/user";
import { paddingTB, paddingLR } from "../styles/common";
import { base } from "../styles/variables";
import AnswerItem from "./answer-item";
import Feedback from "./feedback";
import { IncorrectIcon, CorrectIcon } from "./icons";
import Spacer from "./spacer";
import SubmitButton from "./submit-button";

function KnowledgeBlock({ blockData }) {
  const [user, { recordAnswerChange, submitAnswer }] = useUser();

  const responseComponentMap = {
    notSubmitted: <SubmitButton />,
    correct: (
      <Feedback
        text={blockData.feedback}
        submissionResponse="Correct"
        icon={<CorrectIcon />}
      />
    ),
    incorrect: (
      <Feedback
        text={blockData.feedback}
        submissionResponse="Incorrect"
        icon={<IncorrectIcon />}
      />
    ),
  };

  return (
    <div
      className={cx(
        paddingLR,
        paddingTB,
        css`
          background-color: #fff;
          border: 1px solid ${base.grey};
          padding-bottom: 5rem;
          max-width: 745px;

          @media (min-width: 540px) {
            padding-left: 6rem;
            padding-right: 6rem;
          }
        `
      )}
    >
      <div
        className={css`
          font-size: 1.7rem;
          padding-bottom: 1rem;
        `}
      >
        <p>{blockData.text}</p>
      </div>
      <div>
        <img
          src={blockData.media.url}
          alt="tests what you see"
          className={css`
            width: 100%;
          `}
        />
      </div>
      <Spacer />
      <form
        className={css`
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          border-top: 1px solid ${base.grey};
        `}
        onSubmit={submitAnswer}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          {blockData.answers.map((answer) => (
            <AnswerItem
              key={answer.id}
              answer={answer}
              onItemClick={recordAnswerChange}
              inputProps={{ checked: user.answer.id === answer.id }}
            />
          ))}
        </div>
        {responseComponentMap[user.answer.submissionResponse]}
      </form>
    </div>
  );
}

export default KnowledgeBlock;
