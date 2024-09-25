import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import { div } from "framer-motion/client";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex items-center w-full justify-center h-screen bg-gray-100">
        <motion.div
          className="p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>
        </motion.div>
      </div>
      <RightBar />
    </div>
  );
};

export default App;
