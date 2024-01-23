import Image from 'next/image'

type BulletListProps = {
  items: string[];
};

export default function BulletList({ items }: BulletListProps) {
  return (
    <div className="px-8 md:px-28">
      <div
        className="
          bg-primary text-white rounded-2xl
          flex flex-col items-center py-10
          text-lg
        "
      >
        <ul className="flex flex-col gap-8 md:flex-row md:w-full md:px-8 md:justify-between">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <Image src="/paw-outlined.svg" alt="Paw" width={24} height={24} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
