import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NoteAddPage } from './NoteAddPage';

describe("NoteAddPage component", () => {
  const baseProps = {}
  beforeEach(() =>
    render(
      <NoteAddPage {...baseProps}/>
    )
  );

  describe("props and state", () => {
    it("should", () => {});
  });

  describe("integration", () => {
    it("should", () => {});
  });
});
