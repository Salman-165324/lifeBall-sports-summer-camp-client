import SectionTitle from "../../utils/SectionTitle";
import useInstructorsData from "../../../hooks/useInstructorsData";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors] = useInstructorsData();

  return (
    <div>
      <div className="pt-40 md:pt-48">
        <SectionTitle title={"All the Instructors"}></SectionTitle>
      </div>
      <div>
        {instructors.map((instructor) => (
          <InstructorCard 
          instructor = {instructor}
          key={instructor._id}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
