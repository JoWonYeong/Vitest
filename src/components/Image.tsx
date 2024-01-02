import { CSSProperties } from 'styled-components';
import { ImageWrapper } from '../styled-components/imageWrapper.style';

interface IImage {
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
}
export const Image = ({ src, width, height, alt, onClick, style }: IImage) => {
  return (
    <ImageWrapper width={width} height={height} onClick={onClick} style={style}>
      <img src={src} alt={alt} width={'100%'} height={'100%'} />
    </ImageWrapper>
  );
};
