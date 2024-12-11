import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem, RootState } from "../store/store";
import { addProduct } from "../store/slices/products-slice";

const CreateCard: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  console.log("1Products:", useSelector((state: RootState) => state.products));
  

  // State to track form inputs
  const [product, setProduct] = useState<Omit<CardItem, "id">>({
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
    like: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProduct({
      ...product,
      [id]: id === "price" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("1Products:", products.length);
    // Add a unique ID for the new product (in a real app, this should come from the backend)
    const newProduct: CardItem = { ...product, id: Date.now() };
    console.log("2Products:", products.length);
    console.log(newProduct);

    // Dispatch the product to Redux store
    console.log("3Products:", products.length);
    dispatch(addProduct(newProduct));
    

    // Clear the form after submission
    setProduct({
      title: "",
      price: 0,
      image: "",
      category: "",
      description: "",
      like: false,
    });

    alert("Product created successfully!");
  };

  return (
    <div className="flex justify-center items-center">
      <form className="w-full max-w-lg " onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="title"
              type="text"
              placeholder="Enter title"
              value={product.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="price"
              type="number"
              placeholder="Enter price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="description"
              type="text"
              placeholder="Enter description"
              value={product.description}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="image"
              type="text"
              placeholder="Enter image URL"
              value={product.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="category"
              type="text"
              placeholder="Enter category"
              value={product.category}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateCard;
