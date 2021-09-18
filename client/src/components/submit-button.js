import { css } from "@emotion/css";

function SubmitButton() {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        padding: 3rem;
      `}
    >
      <button
        type="submit"
        className={css`
          cursor: pointer;
          padding-left: 1rem;
          padding-right: 1rem;
          width: 100%;
          min-width: 10rem;
          max-width: 17rem;
          height: 4rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          font-size: 1.2rem;
          line-height: 3.4rem;
          text-overflow: ellipsis;
          color: #fff;
          background-color: silver;
          border: 2px solid transparent;
          border-radius: 2rem;
          box-sizing: border-box;
          transition: background 0.3s, color 0.3s, opacity 0.3s;
        `}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
