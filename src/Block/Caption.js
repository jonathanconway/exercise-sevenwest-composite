import styled from 'styled-components';

import { captionChild } from './utils';

export default styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  // Darkened overlay
  &::before {
    content: ' ';
    background-color: #333333;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;