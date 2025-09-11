import { motion } from "framer-motion";

interface CountrySelectionProps {
  onSelectCountry: (country: string) => void;
}

interface CountryTile {
  id: string;
  title: string;
  description: string;
  icon: string; // For now using emoji flags, can be replaced with actual flag components
}

const countries: CountryTile[] = [
  {
    id: "assistant",
    title: "Track and Trace Assistant",
    description: "Ask about L4 systems, data flows, reporting rules, or troubleshooting — your central hub for L4 queries.",
    icon: "🤖"
  },
  {
    id: "india",
    title: "India API (VEDA)",
    description: "Export serialization & barcode reporting.",
    icon: "🇮🇳"
  },
  {
    id: "russia",
    title: "Russia",
    description: "Crypto codes & encrypted L4–5 reporting.",
    icon: "🇷🇺"
  },
  {
    id: "usa",
    title: "USA DSCSA",
    description: "Serialized EPCIS reporting & partner verification.",
    icon: "🇺🇸"
  },
  {
    id: "uae",
    title: "UAE Tatmeen",
    description: "Serialization, aggregation & GLN registration.",
    icon: "🇦🇪"
  },
  {
    id: "saudi",
    title: "Saudi SFDA",
    description: "Drug Track reporting with Arabic data fields.",
    icon: "🇸🇦"
  },
  {
    id: "uzbekistan",
    title: "Uzbekistan",
    description: "Serialization & encrypted national reporting.",
    icon: "🇺🇿"
  },
  {
    id: "kazakhstan",
    title: "Kazakhstan",
    description: "MSP reporting with crypto code validation.",
    icon: "🇰🇿"
  },
  {
    id: "indonesia",
    title: "Indonesia",
    description: "Serialization & EPOM system reporting.",
    icon: "🇮🇩"
  },
  {
    id: "eu",
    title: "EU Hub (EMVS)",
    description: "EPCIS uploads with 3-day reporting rules.",
    icon: "🇪🇺"
  },
  {
    id: "bahrain",
    title: "Bahrain NHRA",
    description: "Serialization & timely EPCIS file uploads.",
    icon: "🇧🇭"
  }
];

export function CountrySelection({ onSelectCountry }: CountrySelectionProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Radial Glowing Gradient Halo Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, 
                #00E5FF 0%,
                #4FC3F7 25%,
                #7E57C2 50%,
                rgba(126, 87, 194, 0.3) 70%,
                transparent 85%,
                #000000 100%
              )
            `
          }}
        />
      </div>

      {/* Main White Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full bg-white"
      >
        {/* Header - Top Left */}
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="AltiusAI Logo" 
            className="w-[55.5px] h-[48px]"
          />
          <span className="text-xl font-medium text-gray-800">AltiusAI</span>
        </div>

        {/* Main Content - Centered */}
        <div className="flex flex-col items-center justify-center h-full px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-6xl w-full"
          >
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              Where do you need help?
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-base text-gray-600 mt-2 text-center">
              Select a country to explore compliance details, or use the Assistant for support.
            </p>

            {/* Grid of Country/Service Tiles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
            >
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.05) }}
                  onClick={() => onSelectCountry(country.id)}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3 cursor-pointer hover:shadow-lg hover:-translate-y-1 transform transition duration-200 ease-in-out"
                >
                  {/* Icon/Flag */}
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      {country.icon}
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-gray-900 text-sm md:text-base">
                      {country.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      {country.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <p className="text-xs text-gray-500 text-center">
                AltiusAI can make mistakes. Please double-check responses.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default CountrySelection;
