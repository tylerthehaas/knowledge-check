import { css } from "@emotion/css";

function AnswerItem({ answer, inputProps, onItemClick }) {
  return (
    <label
      className={css`
        display: flex;
        align-items: center;
        line-height: 1.5;
        padding: 3rem;

        &:hover {
          background-color: #f7f7f8;
        }
      `}
    >
      <input
        {...inputProps}
        type="radio"
        name={answer.text}
        onChange={onItemClick}
        value={answer.id}
      />
      <p
        className={css`
          display: inline;
          font-size: 1.5rem;
          line-height: 15px;
          padding-left: 6rem;
        `}
      >
        {answer.text}
      </p>
    </label>
  );
}

export default AnswerItem;
