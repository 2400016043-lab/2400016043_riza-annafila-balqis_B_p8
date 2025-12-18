const Contact = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-pink-700 mb-8">
        Hubungi Saya
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-pink-600">rizaannafila@email.com</p>
        </div>
        <div>
          <h3 className="font-semibold">Instagram</h3>
          <p className="text-pink-600">@nafilabalqis_</p>
        </div>
        <div>
          <h3 className="font-semibold">Lokasi</h3>
          <p>Yogyakarta, Indonesia</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
