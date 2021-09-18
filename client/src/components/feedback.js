import { css } from "@emotion/css";
import { useUser } from "../hooks/user";

function Feedback({ text, submissionResponse, icon }) {
  const [, { resetForm }] = useUser();
  return (
    <>
      <div
        className={css`
          min-height: 0;
          max-height: 100rem;
          position: relative;
          overflow: hidden;
          padding-bottom: 0;
          transition: max-height 1s linear 0.3s, min-height 0ms 0.3s;
        `}
      >
        <div
          aria-label="Feedback"
          className={css`
            background-color: #f8f8f8;
            margin-bottom: 3rem;
            padding-top: 3rem;
            padding-bottom: 1.5rem;
          `}
          role="group"
          tabIndex="-1"
        >
          <div
            className={css`
              display: block;
              width: 6rem;
              height: 6rem;
              margin: 0 auto;
              text-align: center;
              line-height: 7rem;
              border-radius: 50%;
              border: 0.2rem solid #cacbcb;
              transition: opacity 0.6s 0.9s, transform 0.6s 0.9s;
            `}
          >
            <i
              className={css`
                font-size: 3rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              {icon}
            </i>
          </div>
          <div
            className={css`
              margin-top: 0.5rem;
              margin-bottom: 2rem;
              letter-spacing: 0.02em;
              font-size: 1.2rem;
              font-weight: 700;
              text-align: center;
            `}
          >
            {submissionResponse}
          </div>
          <div
            aria-hidden="false"
            className={css`
              padding-bottom: 0.2rem;
              padding-left: 11.11111%;
              padding-right: 11.11111%;
              padding-top: 0.3rem;
              margin-bottom: 1.5rem;
              max-height: 74rem;
              line-height: 1.7;
              font-weight: 300;
              font-size: 1.4rem;
              word-wrap: break-word;
              color: #707070;
              text-align: center;
              overflow: auto;
            `}
          >
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div
        className={css`
          max-height: 5rem;
          text-align: center;
        `}
      >
        <button
          className={css`
            letter-spacing: 0.8px;
            color: #313537;
            max-width: 17rem;
            cursor: pointer;
            border: 0;
            background: transparent;
            margin: 0;
            padding: 0;
            border: none;
            border-radius: 0;
            font: inherit;
            color: inherit;
            background: none;
            appearance: none;
          `}
          onClick={resetForm}
          tabIndex="0"
          type="button"
        >
          <div>
            <div
              className={css`
                font-size: 1rem;
                text-transform: uppercase;
              `}
            >
              TAKE AGAIN
            </div>
            <i
              className={css`
                display: block;
              `}
            >
              <svg
                className={css`
                  padding-top: 1.5rem;
                `}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                height="20px"
                width="20px"
                viewBox="0 0 20 20"
              >
                <title>reload</title>
                <path d="M2,2v7h7L5.8,5.8c0.4-0.4,0.8-0.7,1.3-1c2.9-1.6,6.5-0.6,8.2,2.3s0.6,6.5-2.3,8.2S6.4,15.9,4.8,13H2.6c0.4,1,1,1.9,1.8,2.7  c3.1,3.1,8.2,3.1,11.3,0s3.1-8.2,0-11.3s-8.2-3.1-11.3,0L2,2z" />
              </svg>
            </i>
          </div>
        </button>
      </div>
    </>
  );
}

export default Feedback;
