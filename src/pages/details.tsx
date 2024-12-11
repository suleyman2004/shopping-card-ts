import React from "react";
import { RootState } from "../store/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams<{ id: string }>(); 
  const product = useSelector((state: RootState) =>
    state.products.find((item) => item.id === Number(id))
  );
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">{id}, {product}</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {product?.category}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {product?.title}
        </h3>
        {/* <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList.findIndex(
              (item) => item.id === cardItem?.id
            ) !== -1
              ? "Remover from favorites"
              : "Add to favorites"}
          </button>
        </div> */}
        <div className="text-2xl font-semibold text-black">
          <span>Description:</span>
          <span>{product?.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
