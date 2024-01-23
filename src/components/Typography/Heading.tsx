import { PropsWithChildren } from "react";

type Heading3Props = PropsWithChildren<{
  className?: string
}>;
const Heading3 = ({ children, className }: Heading3Props) => {
  const classes = `text-2xl font-semibold ${className}`;
  return (
    <h3 className={classes}>
      {children}
    </h3>
  );
};

export default Heading3;
