import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  color: ${COLORS.gray700};

  /* Style when any child inside has focus */
  /* &:focus-within {
    color: ${COLORS.black};
  } */

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledSelect = styled.select`
  /* hide built-in chevron */
  appearance: none;
  -webkit-appearance: none; /* For Safari */
  -moz-appearance: none; /* For Firefox */
  background: none; /* Optional: clears background image */

  border: none;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  font-size: 16px;
  padding: 12px 52px 12px 16px;
  width: ${({ $width }) => $width}px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 0;
  transform: translateY(50%);
  pointer-events: none;
  color: inherit;
`;

// Hidden span to measure text width
const HiddenSpan = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
  font-size: 16px;
  padding: 12px 52px 12px 16px;
  font-family: sans-serif; /* match your select font */
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const spanRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth);
    }
  }, [displayedValue]);

  return (
    <Wrapper>
      <StyledSelect
        aria-label={label}
        $width={width}
        value={value}
        onChange={onChange}
      >
        {children}
      </StyledSelect>
      <IconWrapper>
        <Icon id="chevron-down" />
      </IconWrapper>
      <HiddenSpan ref={spanRef}>{displayedValue}</HiddenSpan>
    </Wrapper>
  );
};

export default Select;
