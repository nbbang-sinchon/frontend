import React from 'react';
import { css, Global } from '@emotion/react';

const reset = css`
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  b,
  i,
  ol,
  ul,
  li,
  form,
  label,
  legend,
  caption,
  canvas,
  footer,
  header,
  nav,
  input,
  section,
  summary {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: inherit;
    color: inherit;
    background: transparent;
    outline: none;
  }
`;

function Reset() {
  return <Global styles={reset} />;
}

export default Reset;
