import React from "react";

import styled from "styled-components";

function Error({ className }) {
  return (
    <div className={className}>
      <p>{"An error occurred on client"}</p>
    </div>
  );
}

export default styled(Error)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
