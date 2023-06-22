import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { DeleteContactModal } from '.';

const props = {
  open: true,
  setOpen: jest.fn(),
  handleDeleteContact: jest.fn(),
  contactName: 'John Doe',
}

describe('<DeleteContactModal />', () => {
  it('should show exclusion messagem with user name', () => {
    render(<DeleteContactModal {...props} />)

    const exclusionMessage = screen.getByText('Tem certeza que deseja remover o contato ”John Doe”?');
    const warningMessage = screen.getByText('Esta ação não poderá ser desfeita!');

    expect(exclusionMessage).toBeInTheDocument();
    expect(warningMessage).toBeInTheDocument();
  })

  it('should render buttons and execute a function when clicked', () => {
    render(<DeleteContactModal {...props} />)

    const cancelButton = screen.getByRole('button', { name: /cancelar/i });
    expect(cancelButton).toBeInTheDocument();

    cancelButton.click();

    expect(props.setOpen).toBeCalledTimes(1);

    const deleteButton = screen.getByRole('button', { name: /deletar/i });
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(props.handleDeleteContact).toBeCalledTimes(1);
  })

  it('should close modal when cancel button is clicked', async () => {
    render(<DeleteContactModal {...props} />)

    const cancelButton = screen.getByRole('button', { name: /cancelar/i });
    expect(cancelButton).toBeInTheDocument();

    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(props.setOpen).toBeCalledWith(false);
    })
  })
})
