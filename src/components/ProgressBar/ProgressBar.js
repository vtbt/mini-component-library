/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: var(--margin);
  border-radius: var(--borderRadius);
`;

const Bar = styled.div`
  width: ${(props) => `${props.$width}%`};
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: ${({ $roundRightEdgeIfFull }) =>
    $roundRightEdgeIfFull
      ? 'var(--borderRadius)'
      : 'var(--borderRadius) 0 0 var(--borderRadius)'};
`;

const WRAPPER_SIZES = {
  small: {
    '--margin': 0 + 'px',
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--margin': 0 + 'px',
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--margin': 4 + 'px',
    '--borderRadius': 8 + 'px',
  },
};

const BAR_SIZES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--borderRadius': 4 + 'px',
  },
};

const PROGRESS_MIN = 0;
const PROGRESS_MAX = 100;
const ProgressBar = ({ value, size }) => {
  if (value < PROGRESS_MIN || value > PROGRESS_MAX) {
    throw new Error(`Invalid progress value: ${value}`);
  }

  return (
    <Wrapper
      style={WRAPPER_SIZES[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={PROGRESS_MIN}
      aria-valuemax={PROGRESS_MAX}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar
        style={BAR_SIZES[size]}
        $width={value}
        $roundRightEdgeIfFull={value === 100}
      />
    </Wrapper>
  );
};

export default ProgressBar;
