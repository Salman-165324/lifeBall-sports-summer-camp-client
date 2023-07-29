import AddToCartBtn from "../../utils/AddToCartBtn";
import PrimaryBtn from "../../utils/PrimaryBtn";

const PopularClassCard = ({ popularClass }) => {
  const { className, image, instructorName, price } = popularClass;

  return (
   
    <div className="card 2xl:w-96 w-[290px]  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="font-semibold text-xl tracking-wide">{className}</h2>
        <div className="2xl:flex gap-2 justify-between">
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
