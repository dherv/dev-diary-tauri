import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Template } from './Template';

describe("Template component", () => {
  const baseProps = {}
  beforeEach(() =>
    render(
      <Template {...baseProps}/>
    )
  );

  describe("props and state", () => {
    it("should", () => {});
  });

  describe("integration", () => {
    it("should", () => {});
  });
});
