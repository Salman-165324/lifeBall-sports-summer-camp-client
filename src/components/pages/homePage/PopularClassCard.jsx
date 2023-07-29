import AddToCartBtn from "../../utils/AddToCartBtn";
import PrimaryBtn from "../../utils/PrimaryBtn";

const PopularClassCard = ({ popularClass }) => {
  const { className, image, instructorName, price } = popularClass;

  return (
   
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="font-semibold text-xl tracking-wide">{className}</h2>
        <div className="flex gap-2">
          <p>
            {" "}
            <span className="font-semibold">Instructor:</span> {instructorName}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Price:</span> ${price}
          </p>
        </div>
      </div>
      <AddToCartBtn singleClass={popularClass} />
    </div>
  );
};

export default PopularClassCard;
