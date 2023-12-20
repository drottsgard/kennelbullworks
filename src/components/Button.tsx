import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  onClick: () => void;
}>;

const ButtonLink: FC<ButtonProps> = ({
  variant = ButtonVariant.Primary,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(
        `
        rounded
        p-3
        text-sm
      `,
        {
          'bg-primary text-white': variant === ButtonVariant.Primary,
          'bg-white': variant === ButtonVariant.Secondary,
        },
      )}
    >
      <Link href="/">{children}</Link>
    </button>
  );
};

export default ButtonLink;
