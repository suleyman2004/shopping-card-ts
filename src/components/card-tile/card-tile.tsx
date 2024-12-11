import { useDispatch } from "react-redux";
import { removeFromCard } from "../../store/slices/card-slice";
import { CardItem } from "../../store/store";
  
  export interface CardTileProps {
    cardItem: CardItem;
  }
  
const CardTile: React.FC<CardTileProps> = ({ cardItem }) => {

    const dispatch= useDispatch()

    function handleRemoveFromCard(){
        dispatch(removeFromCard(cardItem.id))
    }

  return (
    <div>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cardItem?.image}
            alt={cardItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cardItem?.title}</h1>
            <p className="text-white font-extrabold">{cardItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCard}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTile;