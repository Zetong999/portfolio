
import ProjectCard from "@/components/project";


export default function ProjectsPage() {
  const projects = [
    {
      imageSrc: "/envex-logo.png",
      title: "EnvEx",
      tag: "NEW",
      description: "Dotenv sample made easy!",
      link: "/projects/envex",
    },
    {
      imageSrc: "/fingervein-logo.png",
      title: "FingerVeinApp",
      description: "Machine Learning Finger Vein Authentication System",
      link: "/projects/fingervin",
    },
  ];
  return (
    <div className="px-6 py-10 w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects Header</h1>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                imageSrc={project.imageSrc}
                title={project.title}
                tag={project.tag}
                description={project.description}
                link={project.link}
              />
             
                <hr className="hs-divider my-4 border-t-3 border-gray-300" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

