
const PopularInstructorCard = ({instructor}) => {
    const {image, name} = instructor
  return (
    <div className="card 2xl:w-96 w-[290px] bg-base-100 shadow-xl ">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      
      </div>
    </div>
  );
};

export default PopularInstructorCard;
