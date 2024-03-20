import React from 'react';
import { render } from '@testing-library/react';
import Tag from '../../../../src/components/Tag/Tag';

describe('Tag', () => {
  test('renders Tag component with provided text', () => {
    const text = 'Tag Text';

    const { getByText } = render(<Tag text={text} />);
    const tagElement = getByText(text);

    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('tag');
    expect(tagElement).toHaveClass('default');
    expect(tagElement).toHaveClass('medium');
  });

  test('renders Tag component with custom variant and size', () => {
    const text = 'Tag Text';
    const variant = 'custom';
    const size = 'large';

    const { getByText } = render(<Tag text={text} variant={variant} size={size} />);
    const tagElement = getByText(text);

    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('tag');
    expect(tagElement).toHaveClass('custom');
    expect(tagElement).toHaveClass('large');
  });
});
