import ProjectCard from "../components/ProjectCard"
import organisai from "../assets/organisai.jpeg"
import panitia from "../assets/panitia.jpeg"
import proker from "../assets/proker.jpeg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Organisasi Kampus",
      description: "Aktif dalam organisasi kampus dan kegiatan himpunan mahasiswa.",
      image: organisai,
    },
    {
      id: 2,
      title: "Kepanitiaan",
      description: "Terlibat dalam berbagai kegiatan kepanitiaan kampus.",
      image: panitia,
    },
    {
      id: 3,
      title: "Panitia Proker",
      description: "Aktif dalam kepantiaan organisasi.",
      image: proker,
    },
  ]

  return (
    <section className="py-16 px-4 min-h-[calc(100vh-60px)] bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 text-lg">
            Beberapa pengalaman saya selama berkuliah
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
