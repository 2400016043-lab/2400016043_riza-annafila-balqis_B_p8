import ProjectCard from '../components/ProjectCard'
import ftgue from '../assets/ftgue.jpeg'
import organisai from '../assets/organisai.jpeg'
import panitia from '../assets/panitia.jpeg'
import proker from '../assets/proker.jpeg'

const Home = () => {
  return (
    <main>
      {/* About */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto flex flex-col items-center">
          <img
            src={ftgue}
            alt="Riza Annafila Balqiss"
            className="w-40 h-40 rounded-lg object-cover shadow-xl border-4 border-pink-300"
          />
          <h2 className="text-3xl font-semibold text-pink-700 mt-6 mb-3">
            Halo, Saya Riza Annafila Balqis
          </h2>
          <p className="max-w-xl text-gray-600">
            Saya adalah mahasiswa <b>Sistem Informasi</b> yang tertarik pada
            pengembangan web dan UI menggunakan Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Pengalaman */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-10">
            Pengalaman Selama Berkuliah
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            <ProjectCard
              image={organisai}
              title="Organisasi Kampus"
              description="Aktif dalam organisasi kampus dan kegiatan himpunan mahasiswa."
            />
            <ProjectCard
              image={panitia}
              title="Kepanitiaan"
              description="Terlibat dalam berbagai kegiatan kepanitiaan kampus."
            />
            <ProjectCard
              image={proker}
              title="pantia Proker"
              description="aktif dalam kepantiaan organisasi."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
