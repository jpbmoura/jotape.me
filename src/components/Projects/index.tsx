import { BsArrowUpRight } from "react-icons/bs";

interface IProjectItem {
  title: string;
  description: string;
  link: string;
}

const Item = ({ title, description, link }: IProjectItem) => {
  return (
    <div className="min-h-16">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center font-light decoration-neutral-500 transition hover:text-cyan-400  hover:decoration-cyan-500"
      >
        {title}
        <BsArrowUpRight className="pl-1" />
      </a>
      <p className="font-light text-neutral-400">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Item
        title="1001 Things"
        description="See today album."
        link="https://1001things.vercel.app/"
      />

      <Item
        title="Auralytics"
        description="Insights for your online course."
        link="https://auralytics.vercel.app/"
      />
    </div>
  );
};

export default Projects;
