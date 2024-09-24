import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="p-10 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Hello Vite + React + Tailwind CSS + Framer Motion!
        </h1>
      </motion.div>
    </div>
  );
};

export default App;
