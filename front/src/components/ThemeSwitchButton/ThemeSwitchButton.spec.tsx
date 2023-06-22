import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeSwitchButton } from '.';

describe('<ThemeSwitchButton />', () => {
  it('should show switch button in screen', () => {
    render(<ThemeSwitchButton toggleDarkMode={jest.fn()} />)

    const switchButton = screen.getByRole('checkbox');

    expect(switchButton).toBeInTheDocument();
  })

  it('should execute function when switch is clicked', () => {
    const mockToggleDarkMode = jest.fn();

    render(<ThemeSwitchButton toggleDarkMode={mockToggleDarkMode} />)

    const switchButton = screen.getByRole('checkbox');

    fireEvent.click(switchButton);

    expect(mockToggleDarkMode).toHaveBeenCalled();
    expect(mockToggleDarkMode).toHaveBeenCalledTimes(1);
  })
})
