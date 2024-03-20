import React from "react";
import { render } from '@testing-library/react'
import Alert from "../../../../src/components/Alert/Alert";

describe("Alert", () => {
  test("renders Alert component with provided props", () => {
    const variant = "success";
    const header = "Success!";
    const body = "This is a success message.";
    const footer = "Footer content";

    const { getByText, container } = render(<Alert variant={variant} header={header} body={body} footer={footer} />);

    const alertElement = container.firstChild;
    expect(alertElement).toHaveClass("alert");
    expect(alertElement).toHaveClass(variant);

    const headerElement = getByText(header);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("alert-header");

    const bodyElement = getByText(body);
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass("alert-body");

    const footerElement = getByText(footer);
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("alert-footer");
  });

  test("renders Alert component without a footer", () => {
    const variant = "success";
    const header = "Success!";
    const body = "This is a success message.";

    const { getByText, container } = render(<Alert variant={variant} header={header} body={body} />);

    const alertElement = container.firstChild;
    expect(alertElement).toHaveClass("alert");
    expect(alertElement).toHaveClass(variant);

    const headerElement = getByText(header);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("alert-header");

    const bodyElement = getByText(body);
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass("alert-body");

    const footerElement = container.querySelector(".alert-footer");
    expect(footerElement).not.toBeInTheDocument();
  });
});
