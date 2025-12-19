import ProjectCard from '../components/ProjectCard'
import ftgue from '../assets/ftgue.jpeg'
import organisai from '../assets/organisai.jpeg'
import panitia from '../assets/panitia.jpeg'
import proker from '../assets/proker.jpeg'

const Home = () => {
  const experiences = [
    {
      id: 1,
      image: organisai,
      title: 'Organisasi Kampus',
      description: 'Aktif dalam organisasi kampus dan kegiatan himpunan mahasiswa.'
    },
    {
      id: 2,
      image: panitia,
      title: 'Kepanitiaan',
      description: 'Terlibat dalam berbagai kegiatan kepanitiaan kampus.'
    },
    {
      id: 3,
      image: proker,
      title: 'Panitia Proker',
      description: 'Aktif dalam kepantiaan organisasi.'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto flex flex-col items-center px-4">
          <img
            src={ftgue}
            alt="Riza Annafila Balqiss"
            className="w-40 h-40 rounded-lg object-cover shadow-xl border-4 border-pink-300"
            loading="lazy"
          />
          <h1 className="text-4xl font-bold text-pink-700 mt-6 mb-3">
            Halo, Saya Riza Annafila Balqis
          </h1>
          <p className="max-w-xl text-gray-600 text-lg">
            Saya adalah mahasiswa <strong>Sistem Informasi</strong> yang tertarik pada
            pengembangan web dan UI menggunakan Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-700 mb-4 text-center">
            Pengalaman Selama Berkuliah
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Berikut adalah beberapa pengalaman dan prestasi saya
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {experiences.map((exp) => (
              <ProjectCard
                key={exp.id}
                image={exp.image}
                title={exp.title}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
