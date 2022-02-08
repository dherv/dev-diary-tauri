import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NoteAddForm } from './NoteAddForm';

describe("NoteAddForm component", () => {
  const baseProps = {}
  beforeEach(() =>
    render(
      <NoteAddForm {...baseProps}/>
    )
  );

  describe("props and state", () => {
    it("should", () => {});
  });

  describe("integration", () => {
    it("should", () => {});
  });
});
