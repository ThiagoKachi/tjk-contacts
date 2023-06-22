import { render } from '@testing-library/react';
import { SkeletonCard } from '.';

describe('<SkeletonCard />', () => {
  it('should show skeletons if this component is called', () => {
    const { container } = render(<SkeletonCard />)

    const skeleton = container.getElementsByClassName('MuiSkeleton-root');

    expect(skeleton).toHaveLength(8);
  })
})
