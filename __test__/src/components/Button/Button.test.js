import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../../../src/components/Button/Button';

describe('Button', () => {
  test('renders Button component with provided props', () => {
    const variant = 'primary';
    const size = 'large';
    const onClick = jest.fn();
    const disabled = false;
    const children = 'Click Me';

    const { getByText, container } = render(
      <Button variant={variant} size={size} onClick={onClick} disabled={disabled}>
        {children}
      </Button>,
    );

    const buttonElement = container.firstChild;
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveClass(`btn-${variant}`);
    expect(buttonElement).toHaveClass(`btn-${size}`);
    expect(buttonElement).not.toBeDisabled();

    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();

    const childrenElement = getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });

  test('renders disabled Button when disabled prop is true', () => {
    const { container } = render(
      <Button variant="primary" size="medium" onClick={() => {}} disabled>
        Disabled Button
      </Button>,
    );

    const buttonElement = container.firstChild;
    expect(buttonElement).toBeDisabled();
  });

  test('renders Button component with default props', () => {
    const { container } = render(<Button>Default Button</Button>);

    const buttonElement = container.firstChild;
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).not.toHaveClass('btn-primary');
    expect(buttonElement).not.toHaveClass('btn-large');
    expect(buttonElement).not.toBeDisabled();

    fireEvent.click(buttonElement);
    // No onClick function provided, so it should not throw an error
  });

  test('renders Button component with additional CSS classes', () => {
    const { container } = render(<Button className="custom-class">Custom Button</Button>);

    const buttonElement = container.firstChild;
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
