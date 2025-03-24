import React, { PropsWithChildren, ReactElement } from 'react';
import Link from 'next/link';

type LinkProps = PropsWithChildren<{
  to: string;
}>;

function AppLink({ to, children }: LinkProps): ReactElement {
  return (
    <Link className="font-medium underline" href={to}>
      {children}
    </Link>
  );
}

export default AppLink;
