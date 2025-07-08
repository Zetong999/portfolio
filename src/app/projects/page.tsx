
import ProjectCard from "@/components/project";


export default function ProjectsPage() {
  return (
    <div className="px-6 py-10 w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects Header</h1>

        <div className="space-y-6 divide-y divide-gray-200">
          <ProjectCard
            imageSrc="/envex-logo.png"
            title="EnvEx"
            tag="NEW"
            description="Dotenv sample made easy!"
            link="/projects/envex"
          />
          <ProjectCard
            imageSrc="/fingervein-logo.png"
            title="FingerVeinApp"
            description="Machine Learning Finger Vein Authentication System"
            link="/projects/fingervin"
          />
        </div>
      </div>
    </div>
  );
}

