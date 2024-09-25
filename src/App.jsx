import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import { div } from "framer-motion/client";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />


      <div className="px-4 border-x-2 border-gray-200 py-6 flex w-full flex-col h-screen overflow-y-scroll">
        <Dashboard />
      </div>

      <RightBar />
    </div>

  );
};

export default App;
