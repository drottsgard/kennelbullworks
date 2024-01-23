import { PropsWithChildren } from "react";

type ParagraphProps = PropsWithChildren<{
  className?: string
  as?: string
}>;

const Parapgraph = ({ children, as, className }: ParagraphProps) => {
  return (<p role={as} className={` ${className}`}>{children}</p>)
};

export default Parapgraph;
