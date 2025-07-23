// pages/index.js

export default function DivineTarotStore() {
  const bracelets = [
    { name: "Serpentine", image: "serpentine.jpg" },
    { name: "Tiger's Eye", image: "tigers-eye.jpg" },
    { name: "Rose Quartz", image: "rose-quartz.jpg" },
    { name: "Green Aventurine", image: "green-aventurine.jpg" },
    { name: "Pyrite", image: "pyrite.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">Divine Tarot</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-purple-600">Home</a>
            <a href="#products" className="hover:text-purple-600">Bracelets</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="text-center py-16 bg-purple-100">
        <h2 className="text-4xl font-bold mb-4">Welcome to Divine Tarot</h2>
        <p className="text-lg">
          Your spiritual journey begins here. Explore our handmade crystal bracelets infused with healing energy.
        </p>
      </section>

      <section id="products" className="py-16 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Crystal Bracelets</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {bracelets.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-4 text-center">
              <img
                src={`/images/${item.image}`}
                alt={`${item.name} Bracelet`}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{item.name} Bracelet</h4>
              <p className="text-sm text-gray-600 mb-2">Healing | Energy | Balance</p>
              <p className="text-lg font-bold mb-4">Rs. 299</p>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700"
              >
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-16 bg-purple-50 text-center px-4">
        <h3 className="text-3xl font-bold mb-4">About Divine Tarot</h3>
        <p className="max-w-3xl mx-auto text-lg">
          We blend ancient wisdom with modern style. Every bracelet is selected and energized to bring balance,
          clarity, and love to your life.
        </p>
      </section>

      <section id="contact" className="py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="text-lg">Have a question or want to place a bulk order?</p>
        <p className="text-lg mt-2">
          Message us on{" "}
          <a href="https://wa.me/919999999999" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </p>
      </section>

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Divine Tarot. All rights reserved.
      </footer>
    </div>
  );
}
