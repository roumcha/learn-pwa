import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  onOpenChange: () => void;
};

export default function Backdrop(props: Props): React.JSX.Element {
  return (
    <div
      {...props}
      className={cn(
        'fixed bottom-0 left-0 right-0 top-0 flex h-[100dvh] w-[100dvw] items-center justify-center bg-slate-500/50',
        props.open ? '' : 'hidden',
        props.className
      )}
      onClick={() => props.onOpenChange()}
    >
      {props.children}
    </div>
  );
}
