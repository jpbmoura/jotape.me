interface IWritingtItem {
  title: string;
  description: string;
  link: string;
}

const Item = ({ title, description, link }: IWritingtItem) => {
  return (
    <div className="min-h-16">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-light underline decoration-neutral-500 transition hover:text-lime-400 hover:decoration-lime-500"
      >
        {title}
      </a>
      <p className="max-w-full overflow-hidden text-ellipsis text-nowrap font-light text-neutral-400">
        {description}
      </p>
    </div>
  );
};

const Writing = () => {
  return (
    <div>
      <Item
        title="Texto 1"
        description="Lorem ipsum dolor sit amet. A numquam cumque est ipsum fugiat sit eligendi libero vel culpa doloribus non iure neque. Rem earum omnis qui minus doloremque et veniam quod sed corporis quidem a vero nemo qui mollitia amet."
        link="https://www.eduzz.com/pt-br"
      />
    </div>
  );
};

export default Writing;
