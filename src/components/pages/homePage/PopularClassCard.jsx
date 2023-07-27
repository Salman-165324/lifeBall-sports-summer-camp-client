
const PopularClassCard = ({ popularClass }) => {
  const { className, image, instructorName } = popularClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
       
      </div>
    </div>
  );
};

export default PopularClassCard;
