import styled from 'styled-components';

import { captionChild } from './utils';
import { unitSize } from '../grid';

export default styled.img`
  height: 4rem;
  margin: 0 ${unitSize / 2}rem;
  ${captionChild}
`;
