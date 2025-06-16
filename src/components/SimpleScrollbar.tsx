import clsx from 'clsx';
import type React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const SimpleScrollbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={clsx('h-full flex-1 overflow-hidden', className)}>
      <SimpleBar className="h-full">{children}</SimpleBar>
    </div>
  );
};

export default SimpleScrollbar;
