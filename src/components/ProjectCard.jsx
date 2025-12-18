const ProjectCard = ({ image, title, description }) => {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-2xl p-4 hover:scale-105 transform transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <button className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
          Lihat Selengkapnya
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
