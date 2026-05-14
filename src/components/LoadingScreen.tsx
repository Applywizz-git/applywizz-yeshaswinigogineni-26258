import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const name = "YESHASWINI GOGINENI";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #0A192F, #112240, #0A192F)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Glow orb */}
            <motion.div
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(250,204,21,0.2) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Floating letters */}
            <div className="flex flex-col items-center gap-4">
              {name.split(" ").map((word, wordIdx) => (
                <div key={wordIdx} className="flex justify-center gap-1 md:gap-2">
                  {word.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="text-3xl md:text-6xl font-heading font-bold tracking-wider"
                      style={{ color: "#FDE047", textShadow: "0 0 30px rgba(250,204,21,0.3)" }}
                      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: [0, -8, 0], filter: "blur(0px)" }}
                      transition={{
                        delay: (wordIdx * word.length + i) * 0.05,
                        duration: 0.6,
                        y: { delay: (wordIdx * word.length + i) * 0.05 + 0.6, duration: 2, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
            <motion.p
              className="text-sm font-body tracking-[0.3em] uppercase"
              style={{ color: "#FACC15" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Network Engineer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
