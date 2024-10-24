import { PropsWithChildren } from 'react';
import { cn } from '../../../lib/utils';

interface Props {
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const CloseButton: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <button onClick={() => props.onClick()} className={cn('p-1 border border-black rounded-sm px-3')}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M 5 16 L 16 4" stroke="black" strokeWidth="2" fill="none" />
        <path d="M 5 4 L 16 16" stroke="black" strokeWidth="2" fill="none" />
      </svg>
    </button>
  );
};

export default CloseButton;
