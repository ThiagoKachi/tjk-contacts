import { render, screen } from '@testing-library/react';
import { NewContact } from '.';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

const props = {
  hasContacts: true,
  contactsLength: 2,
}

describe('<NewContact />', () => {
  it('should show text "Contatos" if contactsLength is greater than 1', () => {
    render(<NewContact {...props} />)

    expect(screen.getByText('2 Contatos')).toBeInTheDocument();
  })

  it('should show text "Contato" if contactsLength is 1', () => {
    render(<NewContact { ...props } contactsLength={1} />);

    expect(screen.getByText('1 Contato')).toBeInTheDocument();
  })

  it('should hide text "2 Contatos" if hasContacts is false', () => {
    render(<NewContact { ...props } hasContacts={false} />);

    expect(screen.queryByText('2 Contats')).not.toBeInTheDocument();
  })

  it('should show "Novo Contato" button', () => {
    render(<NewContact { ...props } />);

    const button = screen.getByRole('button', { name: /Novo Contato/i });

    expect(button).toBeInTheDocument();
  })
})
