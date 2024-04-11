import { ProjectCard } from "./ProjectCard";
import { Separator } from "./ui/separator";

const projects = [
  {
    name: "The Health Onion",
    icon: "/Onion.png",
    description:
      "The Health Onion is a health based social media. Join communities that suit you, create posts and share your health journery with others.",
    liveLink: "https://the-health-onion.vercel.app/",
    githubLink: "https://github.com/utsav82/the-health-onion-v1",
  },
  {
    name: "Bollywood Back",
    icon: "/bollywood.png",
    description:
      "Discover the Bollywood movie that were popular when you were born. Just enter your birth date and you have a movie that was popular on the date you entered along with a youtube search for the trailer of the movie",
    liveLink: "https://bollywood-back.vercel.app/",
    githubLink: "https://github.com/utsav82/Bollywood-Back",
  },
  {
    name: "Log-Ingestor-Query",
    icon: "/log.jpg",
    description:
      "This project implements a log ingestor system and a query interface. The system efficiently handles vast volumes of log data and provides a simple interface for querying data.",
    githubLink: "https://github.com/utsav82/log-ingestor-query",
  },
  {
    name: "Code0",
    icon: "/code.png",
    description:
      "The Code Snippets Web Application is a platform designed to facilitate the submission and display of code snippets.",
    githubLink: "https://github.com/utsav82/code0",
    liveLink: "https://code-snippet-run.vercel.app/",
  },
  {
    name: "Paye",
    icon: "/paye.png",
    description:
      "Currently working on Paye, an expense tracker designed to simplify expense tracking and sharing among users.",
    githubLink: "https://github.com/utsav82/paye",
    liveLink: "https://paye-peach.vercel.app/",
  },
  {
    name: "Animusic",
    icon: "/animusic.png",
    description:
      "Listen to anime music on the website with a simple music player. Enjoy hand-picked tunes from anime shows and relive the anime magic through music!",
    liveLink: "https://utsav82.github.io/Animusic/",
    githubLink: "https://github.com/utsav82/Animusic",
  },
];

const Projects = () => {
  return (
    <div className="space-y-6 px-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      <Separator className="my-6" />
      <div className="grid sm:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.name} projectInfo={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
