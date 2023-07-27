import SectionTitle from "../../utils/SectionTitle";
import useInstructorsData from "../../../hooks/useInstructorsData";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const [instructors] = useInstructorsData();
  const topSixInstructors = instructors.slice(0,6)
  return (
    <div>
      <div>
        <SectionTitle title={"Our Popular Instructors"}></SectionTitle>
      </div>
      <div className="mt-16 gap-4 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topSixInstructors.map((instructor) => (
          <PopularInstructorCard 
          key={instructor._id}
          instructor = {instructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
