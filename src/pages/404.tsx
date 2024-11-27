import React from "react";

import styled from "styled-components";

function Custom404({ className }) {
  return (
    <div className={className}>
      <p>404</p>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
    </div>
  );
}

export default styled(Custom404)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
