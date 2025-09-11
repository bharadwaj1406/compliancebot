import { motion } from "framer-motion";

interface HomeProps {
  onGetStarted: () => void;
}

export function Home({ onGetStarted }: HomeProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Circular Glowing Gradient Halo Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, 
                #00E5FF 0%,
                #40C4FF 15%,
                #448AFF 30%,
                #3F51B5 45%,
                #283593 60%,
                #1A237E 75%,
                #0D1421 90%,
                #000000 100%
              )
            `
          }}
        />
      </div>

      {/* Main White Canvas/Card */}
      <div className="relative w-full h-full bg-white">
        {/* Header - Top Left */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <img 
            src="/Logo.png" 
            alt="AltiusAI Logo" 
            className="w-[55.5px] h-[48px]"
          />
          <span className="text-xl font-medium text-gray-900">AltiusAI</span>
        </div>

        {/* Main Content - Centered */}
        <div className="flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            {/* Logo - Medium Size */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Logo.png" 
                alt="AltiusAI Logo" 
                className="w-[83px] h-[72px] mx-auto"
              />
            </motion.div>

            {/* Welcome Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-semibold text-gray-800"
            >
              Welcome to AltiusAI
            </motion.h1>

            {/* Subtitle/Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base text-gray-600 max-w-md leading-relaxed"
            >
              Ask questions, explore country-specific requirements, or use the Assistant for help.
            </motion.p>

            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                onClick={onGetStarted}
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer - Bottom Center */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-sm text-gray-400"
          >
            AltiusAI can make mistakes. Please double-check responses.
          </motion.p>
        </div>
      </div>

      {/* Subtle overlay to enhance the halo effect visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(to right, 
                rgba(0, 229, 255, 0.1) 0%,
                transparent 15%,
                transparent 85%,
                rgba(0, 229, 255, 0.1) 100%
              ),
              linear-gradient(to bottom, 
                rgba(0, 229, 255, 0.1) 0%,
                transparent 15%,
                transparent 85%,
                rgba(0, 229, 255, 0.1) 100%
              )
            `
          }}
        />
      </div>
    </div>
  );
}

export default Home;
