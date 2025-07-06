import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const INPUT_SIZES = {
  small: {
    '--fontSize': 14 + 'px',
    '--borderWidth': 1 + 'px',
    '--paddingTop': 4 + 'px',
    '--paddingBottom': 4 + 'px',
    '--paddingLeft': 24 + 'px',
  },
  large: {
    '--fontSize': 18 + 'px',
    '--borderWidth': 2 + 'px',
    '--paddingTop': 8 + 'px',
    '--paddingBottom': 7 + 'px',
    '--paddingLeft': 36 + 'px',
  },
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid black;
  font-size: var(--fontSize);
  outline-offset: 2px;

  width: ${({ $width }) => $width}px;
  padding-left: var(--paddingLeft);
  padding-top: var(--paddingTop);
  padding-bottom: var(--paddingBottom);

  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.label`
  position: absolute;
  left: 2px;
  top: 2px;
  transform: translateY(50%);
  color: inherit;
`;

const ICON_SIZES = {
  small: 10.67,
  large: 16,
};
const ICON_STROKE_WIDTHS = {
  small: 1,
  large: 2,
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <IconWrapper htmlFor={'icon-input'}>
        <Icon
          id={icon}
          size={ICON_SIZES[size]}
          strokeWidth={ICON_STROKE_WIDTHS[size]}
        />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput
        id={'icon-input'}
        placeholder={placeholder}
        style={INPUT_SIZES[size]}
        $width={width}
      />
    </Wrapper>
  );
};

export default IconInput;
