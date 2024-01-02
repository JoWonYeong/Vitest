import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Image } from '../components/Image';

describe('Image Component Test', () => {
  it('props 받아서 렌더링', () => {
    const src = 'test-image.jpg';
    const altText = 'Test Image';
    const width = '200px';
    const height = '150px';

    render(<Image src={src} alt={altText} width={width} height={height} />);

    const imageElement = screen.getByAltText(altText);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
    expect(imageElement).toHaveAttribute('alt', altText);

    const imageWrapper = imageElement.parentElement;
    expect(imageWrapper).toHaveStyle(`width: ${width}`);
    expect(imageWrapper).toHaveStyle(`height: ${height}`);
  });

  it('클릭하면 props로 전달받은 onClick 함수 실행', async () => {
    const src = 'test-image.jpg';
    const altText = 'Test Image';
    const mockFunction = vi.fn();

    render(<Image src={src} alt={altText} onClick={mockFunction} />);

    const imageElement = screen.getByAltText(altText);
    fireEvent.click(imageElement);
    await waitFor(() => expect(mockFunction).toBeCalled());
    // expect(mockFunction).toHaveBeenCalled();
    // mockFunction("hello", "world");
    // expect(mockFunction).toHaveBeenCalledWith("hello", "world");
  });
});
