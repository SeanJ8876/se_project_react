import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, weatherData }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Your Items</p>
        <button>Add New</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems
          .filter((item) => {
            return weatherData?.type ? item.weather === weatherData.type : true;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
