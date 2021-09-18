import { css, cx } from "@emotion/css";
import { paddingTB, paddingLR } from "../styles/common";

const text = {
  spacing: css`
    padding: 0.8rem 0;
    line-height: 1.25;
  `,
  font: css`
    font-size: 2.6rem;
    font-weight: 700;
  `,
};

function Heading() {
  return (
    <header
      className={cx(
        paddingTB,
        paddingLR,
        css`
          display: block;
        `
      )}
    >
      <h1 className={cx(text.spacing, text.font)}>Knowledge Check Block</h1>
    </header>
  );
}

export default Heading;
