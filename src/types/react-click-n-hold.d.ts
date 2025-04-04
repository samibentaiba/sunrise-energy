declare module 'react-click-n-hold' {
  import { ComponentType, ReactNode } from 'react';

  interface ClickNHoldProps {
    time?: number;
    onStart?: () => void;
    onClickNHold?: () => void;
    onEnd?: (enough: boolean) => void;
    style?: React.CSSProperties;
    className?: string;
    children?: ReactNode;  // ✅ Add children prop
  }

  const ClickNHold: ComponentType<ClickNHoldProps>;
  export default ClickNHold;
}
