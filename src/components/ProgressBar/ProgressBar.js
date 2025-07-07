/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const PROGRESS_MIN = 0;
const PROGRESS_MAX = 100;
const ProgressBar = ({ value, size }) => {
  if (value < PROGRESS_MIN || value > PROGRESS_MAX) {
    throw new Error(`Invalid progress value: ${value}`);
  }

  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={PROGRESS_MIN}
      aria-valuemax={PROGRESS_MAX}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
