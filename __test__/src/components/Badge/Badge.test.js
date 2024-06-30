import React from "react";
import { render } from "@testing-library/react";
import Badge from "../../../../src/components/Badge/Badge";

// Tests that the component renders with default props
it("test_default_props", () => {
  const { getByText } = render(<Badge>Default</Badge>);
  const badge = getByText("Default");
  expect(badge).toHaveClass("rue_badge");
});

// Tests that the component renders with custom props
it("test_custom_props", () => {
  const { getByText } = render(
    <Badge size="sm" variant="primary">
      Custom
    </Badge>
  );
  const badge = getByText("Custom");
  expect(badge).toHaveClass("rue_badge rue_badge_sm rue_badge_primary");
});

// Tests that the component handles an invalid size prop
it("test_invalid_size_prop", () => {
  const { getByText } = render(
    <Badge size="invalid" variant="primary">
      Invalid Size
    </Badge>
  );
  const badge = getByText("Invalid Size");
  expect(badge).toHaveClass("rue_badge badge_primary");
});

// Tests that the component handles an invalid variant prop
it("test_invalid_variant_prop", () => {
  const { getByText } = render(
    <Badge size="sm" variant="invalid">
      Invalid Variant
    </Badge>
  );
  const badge = getByText("Invalid Variant");
  expect(badge).toHaveClass("rue_badge rue_badge_sm");
});

// Tests that the component renders the children prop
it("test_render_children_prop", () => {
  const { getByText } = render(
    <Badge size="sm" variant="primary">
      Children
    </Badge>
  );
  const badge = getByText("Children");
  expect(badge).toBeInTheDocument();
});

// Tests that the component returns the correct class names based on props
it("test_return_correct_class_names", () => {
  const { getByText } = render(
    <Badge size="lg" variant="danger">
      Custom
    </Badge>
  );
  const badge = getByText("Custom");
  expect(badge).toHaveClass("rue_badge rue_badge-lg rue_badge_danger");
});
