import { PropsWithChildren } from 'react';
import { cn } from '~/app/lib/utils';

type Props = {
  className?: string;
};

const CommonContainer: React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <div className={cn('w-full md:max-w-[1170px]', className)}>{children}</div>;
};

export default CommonContainer;
