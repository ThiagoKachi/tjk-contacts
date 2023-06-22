import { render, screen } from '@testing-library/react';
import { ContactCard } from '.';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
  }
})

const props = {
  contact: {
    attributes: {
      category: 'Família',
      email: 'teste@email.com',
      createdAt: '2021-10-10T00:00:00.000Z',
      name: 'Teste',
      phone: 99999999999,
    },
    id: 1,
  },
  onDeleteContact: jest.fn(),
}

describe('<ContactCard />', () => {
  it('should show correct texts in card', () => {
    render(<ContactCard {...props} />)

    expect(screen.getByText('Teste')).toBeInTheDocument();
    expect(screen.getByText('Família')).toBeInTheDocument();
    expect(screen.getByText('teste@email.com')).toBeInTheDocument();
    expect(screen.getByText('(99) 9 9999-9999')).toBeInTheDocument();
  })

  it('should correct href in email and phone', () => {
    render(<ContactCard {...props} />)

    const emailLink = screen.getByText('teste@email.com');
    const phoneLink = screen.getByText('(99) 9 9999-9999');

    expect(emailLink).toHaveAttribute('href', `mailto:${props.contact.attributes.email}`);
    expect(phoneLink).toHaveAttribute('href', `https://api.whatsapp.com/send?phone=${props.contact.attributes.phone}`);
  })

  it('should show button and execute function when click', () => {
    render(<ContactCard {...props} />)

    const editButton = screen.getByTestId('BorderColorOutlinedIcon');
    const deleteButton = screen.getByTestId('DeleteOutlineOutlinedIcon');

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  })
})
