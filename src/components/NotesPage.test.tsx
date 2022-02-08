import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotesPage } from './NotesPage';

describe("NotesPage component", () => {
  const baseProps = {}
  beforeEach(() =>
    render(
      <NotesPage {...baseProps}/>
    )
  );

  describe("props and state", () => {
    it("should", () => {});
  });

  describe("integration", () => {
    it("should", () => {});
  });
});
