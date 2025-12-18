import ProjectCard from "../components/ProjectCard"
import organisai from "../assets/organisai.jpeg"
import panitia from "../assets/panitia.jpeg"
import proker from "../assets/proker.jpeg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "organisasi kampus",
      description: "Aktif dalam organisasi kampus dan kegiatan himpunan mahasiswa.",
      image: organisai,
    },
    {
      id: 2,
      title: "kepanitiaan",
      description: "terlibat dalam berbagai kegiatan kepanitiaan kampus.",
      image: panitia,
    },
    {
      id: 3,
      title: "panitia proker",
      description: "aktif dalam kepantiaan organisasi",
      image: proker,
    },
  ]

  return (
    <section className="py-16 px-6">
      <h1 className="text-3xl font-semibold text-pink-700 text-center">
        Projects
      </h1>
      <p className="mt-4 text-gray-600 text-center">
        Beberapa pengalaman saya selama berkuliah
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
