import styled from 'styled-components';

export const ImageWrapper = styled.div<{ height?: string; width?: string }>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
`;
