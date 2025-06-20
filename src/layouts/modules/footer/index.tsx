import type { FC, PropsWithChildren } from 'react';

export const LayoutFooter: FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-full w-full text-xs">{children}</div>;
};
