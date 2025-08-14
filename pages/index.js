import { useState } from "react";


export default function DivineTarotStore() {
  
  const bracelets = [
  { name: "Amazonite", image: "amazonite_bracelet.jpg", tags: ["calming", "communication", "balance"] },
  { name: "Amethyst Rose Quartz", image: "amethyst_rose_quartz_bracelet.jpg", tags: ["love", "spirituality", "peace"] },
  { name: "Aventurine Tiger Eye Pyrite", image: "aventurine_tiger_eye_pyrite_bracelet.jpg", tags: ["luck", "confidence", "abundance"] },
  { name: "Banded Agate", image: "banded_agate_bracelet.jpg", tags: ["stability", "grounding", "protection"] },
  { name: "Banded Agate Large", image: "banded_agate_bracelet_large.jpg", tags: ["stability", "grounding", "strength"] },
  { name: "Black Onyx Clear Quartz", image: "black_onyx_clear_quartz_bracelet.jpg", tags: ["protection", "clarity", "strength"] },
  { name: "Blue Tiger Eye", image: "blue_tiger_eye_bracelet.jpg", tags: ["calm", "protection", "focus"] },
  { name: "Citrine Baguettes", image: "citrine_baguette_bracelets.jpg", tags: ["success", "abundance", "energy"] },
  { name: "Citrine Carnelian Amazonite", image: "citrine_carnelian_amazonite_bracelet.jpg", tags: ["motivation", "confidence", "peace"] },
  { name: "Citrine Faceteds", image: "citrine_faceted_bracelets.jpg", tags: ["joy", "wealth", "positivity"] },
  { name: "Citrine Rose Quartz", image: "citrine_rose_quartz_bracelet.jpg", tags: ["love", "abundance", "happiness"] },
  { name: "Citrine Smoky Quartz", image: "citrine_smoky_quartz_bracelet.jpg", tags: ["protection", "grounding", "manifestation"] },
  { name: "Citrine Smoky Quartz 2", image: "citrine_smoky_quartz_bracelet_2.jpg", tags: ["grounding", "clarity", "confidence"] },
  { name: "Clear Quartz", image: "clear_quartz_bracelet.jpg", tags: ["clarity", "healing", "amplification"] },
  { name: "Crackle Citrine", image: "crackle_citrine_bracelet.jpg", tags: ["energy", "joy", "creativity"] },
  { name: "Faceted Pyrite Buddha", image: "faceted_pyrite_buddha_bracelet.jpg", tags: ["abundance", "protection", "focus"] },
  { name: "Fancy Jasper", image: "fancy_jasper_bracelet.jpg", tags: ["healing", "focus", "stability"] },
  { name: "Gold Metal Beads", image: "gold_metal_beads_bracelet.jpg", tags: ["style", "energy", "vitality"] },
  { name: "Green Aventurine Citrine Hematite", image: "green_aventurine_citrine_hematite_bracelet.jpg", tags: ["luck", "abundance", "grounding"] },
  { name: "Green Frequency Tokens", image: "green_frequency_tokens.jpg", tags: ["energy", "frequency", "balance"] },
  { name: "Hematite Citrine", image: "hematite_citrine_bracelet.jpg", tags: ["confidence", "focus", "energy"] },
  { name: "Hematite Clear Quartz", image: "hematite_clear_quartz_bracelet.jpg", tags: ["strength", "healing", "clarity"] },
  { name: "Lapis Lazuli", image: "lapis_lazuli_bracelet.jpg", tags: ["wisdom", "truth", "intuition"] },
  { name: "Lava Stone Chakra", image: "lava_stone_chakra_bracelet.jpg", tags: ["balance", "grounding", "chakra"] },
  { name: "Multi Colour Cat Eye Glass", image: "multi_colour_cat_eye_glass_bracelet.jpg", tags: ["luck", "focus", "protection"] },
  { name: "Pink Aventurine", image: "pink_aventurine_bracelet.jpg", tags: ["love", "emotional balance", "healing"] },
  { name: "Purple Cat Eye", image: "purple_cat_eye_bracelet.jpg", tags: ["intuition", "focus", "calm"] },
  { name: "Pyrite", image: "pyrite_bracelet.jpg", tags: ["wealth", "protection", "energy"] },
  { name: "Pyrite Chakra", image: "pyrite_chakra_bracelet.jpg", tags: ["confidence", "energy", "balance"] },
  { name: "Pyrite Citrine", image: "pyrite_citrine_bracelet.jpg", tags: ["abundance", "manifestation", "vitality"] },
  { name: "Pyrite Hematite Frequency Stones", image: "pyrite_hematite_frequency_stones.jpg", tags: ["strength", "focus", "balance"] },
  { name: "Pyrite Skull Charm", image: "pyrite_skull_charm_bracelet.jpg", tags: ["abundance", "style", "power"] },
  { name: "Red Tiger Eye", image: "red_tiger_eye_bracelet.jpg", tags: ["confidence", "passion", "motivation"] },
  { name: "Rose Quartz Frequency Stones", image: "rose_quartz_frequency_stones.jpg", tags: ["love", "healing", "peace"] },
  { name: "Rose Quartz Leaf Charm", image: "rose_quartz_leaf_charm_bracelet.jpg", tags: ["love", "harmony", "beauty"] },
  { name: "Rutilated Quartz Aventurine Pyrite", image: "rutilated_quartz_aventurine_pyrite_bracelet.jpg", tags: ["clarity", "luck", "manifestation"] },
  { name: "Smoky Quartz Clear Quartz", image: "smoky_quartz_clear_quartz_bracelet.jpg", tags: ["grounding", "protection", "cleansing"] },
  { name: "Tiger Eye Hematite Onyx", image: "tiger_eye_hematite_onyx_bracelet.jpg", tags: ["protection", "strength", "focus"] },
  { name: "Tiger Eye Pyrite Citrine Amazonite", image: "tiger_eye_pyrite_citrine_amazonite.jpg", tags: ["abundance", "confidence", "calm"] },
  { name: "Turquoise", image: "turquoise_bracelet.jpg", tags: ["communication", "healing", "protection"] },
  { name: "Turquoise Matrix", image: "turquoise_matrix_bracelet.jpg", tags: ["balance", "wisdom", "healing"] },
  { name: "Turquoise Tiger Eye Clear Quartz", image: "turquoise_tiger_eye_clear_quartz_bracelet.jpg", tags: ["focus", "healing", "clarity"] },
  { name: "White Opalite", image: "white_opalite_bracelet.jpg", tags: ["intuition", "serenity", "spirituality"] }
];
const [couponCodes, setCouponCodes] = useState(Array(bracelets.length).fill(""));
const handleCouponChange = (index, value) => {
  const updatedCoupons = [...couponCodes];
  updatedCoupons[index] = value;
  setCouponCodes(updatedCoupons);
};

const isCouponApplied = (index) => {
  return couponCodes[index]?.trim().toLowerCase() === "divine14";
};
const [showInput, setShowInput] = useState(Array(bracelets.length).fill(false));
const toggleInput = (index) => {
  const updated = [...showInput];
  updated[index] = !updated[index];
  setShowInput(updated);
};

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
            <a href="https://www.instagram.com/divinetarot1491/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Insta</a>

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

              {isCouponApplied(index) ? (
                <>
                  <p className="text-sm text-gray-500 line-through">MRP: ₹1000</p>
                  <p className="text-lg font-bold text-green-600 mb-2">Now: ₹499</p>
                </>
              ) : (
                <>
                  <p className="text-lg font-bold text-gray-800 mb-2">MRP: ₹1000</p>
                </>
              )}

              <div className="mb-3">
  <button
    onClick={() => toggleInput(index)}
    className="text-sm text-purple-700 underline hover:text-purple-900 transition-colors duration-150"
  >
    Apply discount code here
  </button>

  {showInput[index] && (
    <div className="mt-2 flex flex-col items-center space-y-1">
      <input
        type="text"
        placeholder="Enter code"
        className="w-40 border border-gray-300 px-2 py-1 text-sm rounded-md text-center"
        value={couponCodes[index] || ""}
        onChange={(e) => handleCouponChange(index, e.target.value)}
      />
      {couponCodes[index] && (
        <p
          className={`text-xs ${
            isCouponApplied(index) ? "text-green-600" : "text-red-500"
          }`}
        >
          {isCouponApplied(index) ? "Coupon Applied!" : "Invalid Code"}
        </p>
      )}
    </div>
  )}
</div>

              <a
                href={`https://wa.me/919920897066?text=Hi, I'm interested in the ${encodeURIComponent(item.name)} Bracelet at ₹${isCouponApplied(index) ? "499" : "1000"}`}
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
  © {new Date().getFullYear()} Divine Tarot. All rights reserved. <br />
  <a
    href="https://www.instagram.com/divinetarot1491/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 underline mt-2 inline-block"
  >
    Follow us on Instagram
  </a>
</footer>
    </div>
  );
}
