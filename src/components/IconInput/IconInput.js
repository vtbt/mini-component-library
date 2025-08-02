import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    iconStrokeWidth: 1,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    iconStrokeWidth: 2,
    borderThickness: 2,
    height: 36,
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);

  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  border: none;
  border-bottom: var(--border-thickness) solid black;
  outline-offset: 2px;
  padding-left: var(--height);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const IconInput = ({ label, icon, width = 250, size, ...delegatedProps }) => {
  const styles = STYLES[size];

  // validate size
  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.iconStrokeWidth}
        />
      </IconWrapper>
      <TextInput
        {...delegatedProps}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  );
};

export default IconInput;

// import React from 'react';
// import styled from 'styled-components';

// import { COLORS } from '../../constants';

// import Icon from '../Icon';
// import VisuallyHidden from '../VisuallyHidden';

// const INPUT_SIZES = {
//   small: {
//     '--fontSize': 14 + 'px',
//     '--borderWidth': 1 + 'px',
//     '--paddingTop': 4 + 'px',
//     '--paddingBottom': 4 + 'px',
//     '--paddingLeft': 24 + 'px',
//   },
//   large: {
//     '--fontSize': 18 + 'px',
//     '--borderWidth': 2 + 'px',
//     '--paddingTop': 8 + 'px',
//     '--paddingBottom': 7 + 'px',
//     '--paddingLeft': 36 + 'px',
//   },
// };

// const Wrapper = styled.div`
//   position: relative;
//   color: ${COLORS.gray700};

//   &:hover {
//     color: ${COLORS.black};
//   }
// `;

// const StyledInput = styled.input`
//   border: none;
//   border-bottom: var(--borderWidth) solid black;
//   font-size: var(--fontSize);
//   outline-offset: 2px;

//   width: ${({ $width }) => $width}px;
//   padding-left: var(--paddingLeft);
//   padding-top: var(--paddingTop);
//   padding-bottom: var(--paddingBottom);

//   font-weight: 700;
//   color: inherit;

//   &::placeholder {
//     font-weight: 400;
//     color: ${COLORS.gray500};
//   }
// `;

// const IconWrapper = styled.label`
//   position: absolute;
//   left: 2px;
//   top: 2px;
//   transform: translateY(50%);
//   color: inherit;
// `;

// const ICON_SIZES = {
//   small: 10.67,
//   large: 16,
// };
// const ICON_STROKE_WIDTHS = {
//   small: 1,
//   large: 2,
// };

// const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
//   return (
//     <Wrapper>
//       <IconWrapper htmlFor={'icon-input'}>
//         <Icon
//           id={icon}
//           size={ICON_SIZES[size]}
//           strokeWidth={ICON_STROKE_WIDTHS[size]}
//         />
//       </IconWrapper>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       <StyledInput
//         id={'icon-input'}
//         placeholder={placeholder}
//         style={INPUT_SIZES[size]}
//         $width={width}
//       />
//     </Wrapper>
//   );
// };

// export default IconInput;
