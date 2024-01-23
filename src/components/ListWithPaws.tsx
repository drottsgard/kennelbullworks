import React from 'react';
import Image from 'next/image';
import AppLink from './Typography/Link';
import clsx from 'clsx';

type ItemWithPaws = {
  title: string;
  text: string;

  numOfPaws: number;

  linkOptions?: {
    linkText: string;
    linkTo: string;
  };
};

type ListWithPawsProps = {
  items: ItemWithPaws[];
};

function ListWithPaws({ items }: ListWithPawsProps) {
  return (
    <ul className="flex flex-col gap-12 md:mx-28">
      {items.map((item, index) => (
        <ListItemWithPaws key={item.title} item={item} index={index + 1} />
      ))}
    </ul>
  );
}

export default ListWithPaws;

function ListItemWithPaws({
  item,
  index,
}: {
  item: ListWithPawsProps['items'][0];
  index: number;
}) {
  const pawArray = [...Array(item.numOfPaws)].map((_, index) => index + 1);
  return (
    <li className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="bg-primary text-white rounded-full flex justify-center items-center text-xl text-center min-w-[50px] h-[50px]">
          {index}
        </div>
        <h4 className="text-xl">{item.title}</h4>
      </div>
      <div className="flex gap-8">
        <div className="min-w-[50px] flex flex-col gap-3">
          {pawArray.map((num) => (
            <Image
              key={num}
              alt="paw"
              src="/paw.svg"
              width={24}
              height={24}
              className={clsx({ 'self-end': num % 2 === 0 })}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="md:max-w-xl">{item.text}</p>
        </div>
      </div>
    </li>
  );
}
