import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const contactMethods = [
    { label: 'Email', value: 'rizaannafila@email.com', icon: '✉️' },
    { label: 'Instagram', value: '@nafilabalqis_', icon: '📱' },
    { label: 'Lokasi', value: 'Yogyakarta, Indonesia', icon: '📍' }
  ]

  return (
    <section className="py-16 bg-white min-h-[calc(100vh-60px)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-pink-700 mb-8 text-center">
          Hubungi Saya
        </h2>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => (
            <div key={method.label} className="text-center p-6 bg-pink-50 rounded-lg shadow-md">
              <div className="text-4xl mb-3">{method.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{method.label}</h3>
              <p className="text-pink-600">{method.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto bg-pink-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h3>
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Thank you! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
