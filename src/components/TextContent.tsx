import { PropsWithChildren, ReactNode } from 'react';

export enum TextContentTitlePlacement {
  Left = 1,
  Center = 2,
}

type TextContentProps = PropsWithChildren<{
  title: string;
  content: ReactNode;

  titlePlacement?: TextContentTitlePlacement;
}>;
export function TextContent({
  title,
  content,
  children,
  titlePlacement = TextContentTitlePlacement.Left,
}: TextContentProps) {
  return (
    <>
      <div className="text-left flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {content}
      </div>
      {children}
    </>
  );
}

export default TextContent;
