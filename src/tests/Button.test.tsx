import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button Component - ViTest', () => {
  it('기본 버튼 렌더링', () => {
    render(<Button />);
    const defaultButton = screen.getByText('기본 버튼');

    expect(defaultButton).toBeInTheDocument();
  });

  it('primary 버튼 렌더링', () => {
    render(<Button />);
    const primaryButton = screen.getByText('primary 버튼');

    expect(primaryButton).toBeInTheDocument();
  });
});
