import useClassData from "../../../hooks/useClassData";
import DataLoadingProblemText from "../../utils/DataLoadingProblemText";
import SectionTitle from "../../utils/SectionTitle";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, , axiosError, errorMessage] = useClassData();
  return axiosError? (
   <div className="pt-32 w-full text-center">

      <DataLoadingProblemText errorMessage={errorMessage} ></DataLoadingProblemText>

   </div>
  ) : (
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
