import { css, cx } from "@emotion/css";
import React from "react";
import { useKnowledgeCheckBlocks } from "../hooks/knowledge-check";
import { paddingLR, paddingTB } from "../styles/common";
import { base } from "../styles/variables";
import Heading from "./heading";
import KnowledgeBlock from "./knowledge-block";
import { UserProvider } from "../contexts/user";

const background = css`
  background-color: ${base.backgroundColor};
`;

function App() {
  const knowledgeCheckBlocks = useKnowledgeCheckBlocks();

  return (
    <UserProvider>
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <section
          className={cx(
            background,
            css`
              @media (min-width: 840px) {
                padding-left: 6rem;
                padding-right: 6rem;
              }
            `
          )}
        >
          <Heading />
          <div>
            <div className={paddingTB}>
              <div className={cx(paddingLR, css``)}>
                {knowledgeCheckBlocks.map((kcb) => (
                  <KnowledgeBlock key={kcb.id} blockData={kcb} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </UserProvider>
  );
}

export default App;
