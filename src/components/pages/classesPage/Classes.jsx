import useClassData from "../../../hooks/useClassData";
import SectionTitle from "../../utils/SectionTitle";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes] = useClassData();
  return (
    <div>
      <div className=" pt-40 md:pt-48">
        <SectionTitle title={"All the Classes"}></SectionTitle>
      </div>
      <div>
        {classes?.map((singleClass) => (
          <ClassCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
