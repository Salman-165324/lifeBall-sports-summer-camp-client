import SectionTitle from "../../utils/SectionTitle";
import useInstructorsData from "../../../hooks/useInstructorsData";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors] = useInstructorsData();
  console.log(instructors);

  return (
    <div>
      <div className="mt-16">
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
