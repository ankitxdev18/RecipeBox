import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className=" py-10 px-[20%] w-screen h-screen text-white font-thin bg-gray-800 text-md">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
