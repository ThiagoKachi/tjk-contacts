import { render } from '@testing-library/react';
import { BackdropLoading } from '.';

describe('<BackdropLoading />', () => {
  it('should show backdrop with spinner when isLoading to be true', () => {
    const { container } = render(<BackdropLoading isLoading />)

    const backdrop = container.getElementsByClassName('MuiBackdrop-root')[0];
    const spinner = container.getElementsByClassName('MuiCircularProgress-circle')[0];

    expect(backdrop).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  })
})
