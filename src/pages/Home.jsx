import axios from "axios";

const Home = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className=" p-4">home</h1>
      <button className="hover:scale-102 rounded mr-2 p-2 bg-blue-900" onClick={getProduct}>Get Products</button>
    </div>
  );
};

export default Home;
