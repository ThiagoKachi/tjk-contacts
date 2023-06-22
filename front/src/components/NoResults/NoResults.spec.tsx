import { render, screen } from '@testing-library/react';
import { NoResults } from '.';

describe('<NoResults />', () => {
  it('should show no results message with correct filterName', () => {
    render(<NoResults filterName="teste" />)

    expect(screen.getByText('Nenhum resultado foi encontrado para')).toBeInTheDocument();
    expect(screen.getByText('"teste"')).toBeInTheDocument();
  })
})
