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
        className="font-light underline decoration-neutral-500 transition hover:text-cyan-400 hover:decoration-cyan-500"
      >
        {title}
      </a>
      <p className="font-light text-neutral-400">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Item
        title="duck.img"
        description="Image generator app"
        link="https://www.eduzz.com/pt-br"
      />
    </div>
  );
};

export default Projects;
