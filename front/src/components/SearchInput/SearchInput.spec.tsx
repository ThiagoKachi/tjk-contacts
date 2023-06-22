import { render, screen } from '@testing-library/react';
import { SearchInput } from '.';

const props = {
  searchContact: 'searchContact',
  setSearchContact: jest.fn(),
}

describe('<SearchInput />', () => {
  it('should show input in screen and have the correct value', async () => {
    render(<SearchInput {...props} />)

    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.value).toBe(props.searchContact);
  })
})
