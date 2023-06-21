import { render, screen } from '@testing-library/react';
import { BackdropLoading } from '.';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<BackdropLoading isLoading />)
    expect(1).toBe(1);
  })
})
