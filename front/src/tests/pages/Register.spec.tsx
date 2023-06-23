import { render, screen } from '@testing-library/react';
import { Register } from '../../pages/Register';

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({
      id: '1',
    }),
    useNavigate: () => jest.fn(),
  };
});

const props = {
  toggleDarkMode: jest.fn(),
}

describe('<Register />', () => {
  it('should show inputs ans button in screen', () => {
    render(<Register {...props} />)

    const inputs = screen.getAllByRole('textbox');
    const select = screen.getAllByRole('combobox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(3);
    expect(select).toHaveLength(1);
    expect(button).toBeInTheDocument();
  })
})
