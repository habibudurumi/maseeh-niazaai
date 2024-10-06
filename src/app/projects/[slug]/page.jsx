

import { projects } from "../../../../data";
import ProjectClient from "@/components/ProjectClient";

// Server component for data fetching
export default function ProjectPage({ params }) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return <ProjectClient project={project} />;
}

// Generate static paths for each project slug
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
