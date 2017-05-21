import styled from 'styled-components';

import { unitSize } from '../grid';

export default styled.div`
  border-top: solid ${unitSize / 2}rem;
  border-bottom: solid ${unitSize / 2}rem;
  border-left: solid ${unitSize}rem;
  border-right: solid ${unitSize}rem;
  border-color: #010101;
  display: inline-block;
  position: relative;
  font-family: "Open Sans", arial, tahoma, serif;
`;