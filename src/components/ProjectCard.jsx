import PropTypes from 'prop-types'

const ProjectCard = ({ image, title, description }) => {
  const handleLearnMore = () => {
    // Can be extended for future modal or detailed page
    console.log(`More info about: ${title}`)
  }

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-2xl p-4 hover:scale-105 transform transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
        loading="lazy"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <button
          onClick={handleLearnMore}
          className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label={`Learn more about ${title}`}
        >
          Lihat Selengkapnya
        </button>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ProjectCard
