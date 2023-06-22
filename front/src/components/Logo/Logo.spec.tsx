import { render, screen } from '@testing-library/react';
import Logo from '.';

describe('<Logo />', () => {
  it('should show Logo when this component is called', () => {
    render(<Logo />)

    expect(screen.getByText('Tjk')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
  })
})
