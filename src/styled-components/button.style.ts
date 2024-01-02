import styled from 'styled-components';

export const ButtonStyle = styled.button<{ $primary?: boolean }>`
  color: ${(props) => (props.$primary ? 'blue' : 'red')};
`;
