import { BsArrowUpRight } from "react-icons/bs";

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
        className="flex flex-row items-center font-light underline decoration-neutral-500 transition hover:text-lime-400 hover:decoration-lime-500"
      >
        {title}
        <BsArrowUpRight className="pl-1" />
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
        title="Antes do fim"
        description="Um dia irei relembrar de tudo isso..."
        link="https://medium.com/@jopmoura49/antes-do-fim-5dcacba66576"
      />
    </div>
  );
};

export default Writing;
