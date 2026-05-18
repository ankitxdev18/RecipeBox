import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  },[]);

  return (
    <div>
      <h1 className=" p-4">home</h1>
      <button
        className="hover:scale-102 rounded mr-2 p-2 bg-blue-900"
        onClick={getProduct}
      >
        Get Products
      </button>
    </div>
  );
};

export default Home;
