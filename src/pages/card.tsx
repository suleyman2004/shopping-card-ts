import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardTile from "../components/card-tile/card-tile";
import { CardItem, RootState } from "../store/store";



const Card = () => {
  const [totalCard, setTotalCard] = useState<number>(0);

  const  card  = useSelector((state: RootState) => state.card);

  
  useEffect(() => {
    setTotalCard(card.reduce((acc:number, curr: CardItem) => acc + curr.price, 0));
  }, [card]);
  
  return (
    <div className="flex justify-center">
      {card && card.length ? (
        <div>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {card.map((cardItem) => (
                <CardTile key={cardItem.id} cardItem={cardItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your Card Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item:</span>
                <span> {card.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount:</span>
                <span> {totalCard}$</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your card is empty
          </h1>
          <Link to="/products">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;