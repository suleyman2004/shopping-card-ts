import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCard, removeFromCard } from "../../store/slices/card-slice";
import { CardItem, RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { removeProduct, toggleLike } from "../../store/slices/products-slice";

interface ProductTileProps {
  product: CardItem;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  const dispatch = useDispatch();
  const card = useSelector((state: RootState) => state.card);

  function handleToggleLike(e: React.MouseEvent) {
    dispatch(toggleLike(product.id));
    e.preventDefault();
  }

  function handleAddToCard(e: React.MouseEvent) {
    dispatch(addToCard(product));
    e.preventDefault();
  }

  function handleRemoveFromCard(e: React.MouseEvent) {
    dispatch(removeFromCard(product.id));
    e.preventDefault();
  }

  function handleRemoveProduct(e: React.MouseEvent){
    dispatch(removeProduct(product.id))
    e.preventDefault();
  }

  return (
    <div>
      <Link
        className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl"
        to={`/products/${product?.id}`}
      >
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              card.some((item) => item.id === product.id)
                ? handleRemoveFromCard
                : handleAddToCard
            }
            className="text-sm p-3 rounded-lg mr-1 uppercase font-medium tracking-wider inline-block shadow-md bg-red-950 text-white"
          >
            {card.some((item) => item.id === product.id)
              ? "Remove from card"
              : "Add to card"}
          </button>
          <button
            onClick={handleToggleLike}
            className="text-sm p-3 rounded-lg mr-1 uppercase font-medium tracking-wider inline-block shadow-md bg-red-950 text-white"
          >
            {product.like ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
          <button
            onClick={handleRemoveProduct}
            className="text-sm p-3 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-red-950 text-white"
          >
            <ImBin/>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductTile;
