import { ButtonStyle } from '../styled-components/button.style';

export const Button = () => {
  return (
    <>
      <ButtonStyle>기본 버튼</ButtonStyle>
      <ButtonStyle $primary>primary 버튼</ButtonStyle>
    </>
  );
};
