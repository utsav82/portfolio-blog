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
      <div className="grid sm:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} projectInfo={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
