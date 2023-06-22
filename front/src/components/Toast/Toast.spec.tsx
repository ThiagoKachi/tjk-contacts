import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Toast from '.';

const props = {
  open: true,
  setOpen: jest.fn(),
  message: 'teste message',
}

describe('<Toast />', () => {
  it('should show toast with the correct message', () => {
    render(<Toast {...props} />)

    expect(screen.getByText('teste message')).toBeInTheDocument();
  })

  it('should show toast with the correct message', async () => {
    render(<Toast {...props} />)

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(props.setOpen).toHaveBeenCalled();
    await waitFor(() => {
      expect(props.setOpen).toBeCalledWith({
        open: false,
        message: '',
      });
    })
  })
})
