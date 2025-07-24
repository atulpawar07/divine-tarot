export default function DivineTarotStore() {
  const bracelets = [
    { name: "Amazonite", image: "amazonite_bracelet.jpg" },
    { name: "Amethyst Rose Quartz", image: "amethyst_rose_quartz_bracelet.jpg" },
    { name: "Aventurine Tiger Eye Pyrite", image: "aventurine_tiger_eye_pyrite_bracelet.jpg" },
    { name: "Banded Agate", image: "banded_agate_bracelet.jpg" },
    { name: "Banded Agate Large", image: "banded_agate_bracelet_large.jpg" },
    { name: "Black Onyx Clear Quartz", image: "black_onyx_clear_quartz_bracelet.jpg" },
    { name: "Blue Tiger Eye", image: "blue_tiger_eye_bracelet.jpg" },
    { name: "Citrine Baguettes", image: "citrine_baguette_bracelets.jpg" },
    { name: "Citrine Carnelian Amazonite", image: "citrine_carnelian_amazonite_bracelet.jpg" },
    { name: "Citrine Faceteds", image: "citrine_faceted_bracelets.jpg" },
    { name: "Citrine Rose Quartz", image: "citrine_rose_quartz_bracelet.jpg" },
    { name: "Citrine Smoky Quartz", image: "citrine_smoky_quartz_bracelet.jpg" },
    { name: "Citrine Smoky Quartz 2", image: "citrine_smoky_quartz_bracelet_2.jpg" },
    { name: "Clear Quartz", image: "clear_quartz_bracelet.jpg" },
    { name: "Crackle Citrine", image: "crackle_citrine_bracelet.jpg" },
    { name: "Faceted Pyrite Buddha", image: "faceted_pyrite_buddha_bracelet.jpg" },
    { name: "Fancy Jasper", image: "fancy_jasper_bracelet.jpg" },
    { name: "Gold Metal Beads", image: "gold_metal_beads_bracelet.jpg" },
    { name: "Green Aventurine Citrine Hematite", image: "green_aventurine_citrine_hematite_bracelet.jpg" },
    { name: "Green Frequency Tokens", image: "green_frequency_tokens.jpg" },
    { name: "Hematite Citrine", image: "hematite_citrine_bracelet.jpg" },
    { name: "Hematite Clear Quartz", image: "hematite_clear_quartz_bracelet.jpg" },
    { name: "Lapis Lazuli", image: "lapis_lazuli_bracelet.jpg" },
    { name: "Lava Stone Chakra", image: "lava_stone_chakra_bracelet.jpg" },
    { name: "Multi Colour Cat Eye Glass", image: "multi_colour_cat_eye_glass_bracelet.jpg" },
    { name: "Pink Aventurine", image: "pink_aventurine_bracelet.jpg" },
    { name: "Purple Cat Eye", image: "purple_cat_eye_bracelet.jpg" },
    { name: "Pyrite", image: "pyrite_bracelet.jpg" },
    { name: "Pyrite Chakra", image: "pyrite_chakra_bracelet.jpg" },
    { name: "Pyrite Citrine", image: "pyrite_citrine_bracelet.jpg" },
    { name: "Pyrite Hematite Frequency Stones", image: "pyrite_hematite_frequency_stones.jpg" },
    { name: "Pyrite Skull Charm", image: "pyrite_skull_charm_bracelet.jpg" },
    { name: "Red Tiger Eye", image: "red_tiger_eye_bracelet.jpg" },
    { name: "Rose Quartz Frequency Stones", image: "rose_quartz_frequency_stones.jpg" },
    { name: "Rose Quartz Leaf Charm", image: "rose_quartz_leaf_charm_bracelet.jpg" },
    { name: "Rutilated Quartz Aventurine Pyrite", image: "rutilated_quartz_aventurine_pyrite_bracelet.jpg" },
    { name: "Smoky Quartz Clear Quartz", image: "smoky_quartz_clear_quartz_bracelet.jpg" },
    { name: "Tiger Eye Hematite Onyx", image: "tiger_eye_hematite_onyx_bracelet.jpg" },
    { name: "Tiger Eye Pyrite Citrine Amazonite", image: "tiger_eye_pyrite_citrine_amazonite.jpg" },
    { name: "Turquoise", image: "turquoise_bracelet.jpg" },
    { name: "Turquoise Matrix", image: "turquoise_matrix_bracelet.jpg" },
    { name: "Turquoise Tiger Eye Clear Quartz", image: "turquoise_tiger_eye_clear_quartz_bracelet.jpg" },
    { name: "White Opalite", image: "white_opalite_bracelet.jpg" }
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
              <p className="text-sm text-gray-500 line-through">MRP: ₹1000</p>
              <p className="text-lg font-bold text-green-600 mb-4">Now: ₹499</p>
              <a
                href={`https://wa.me/919769805184?text=Hi, I'm interested in the ${encodeURIComponent(item.name)} Bracelet at ₹499`}
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
          Message us on{' '}
          <a href="https://wa.me/919769805184" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
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
