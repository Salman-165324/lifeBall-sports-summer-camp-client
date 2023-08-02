import { useEffect } from "react";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import SectionTitle from "../../utils/SectionTitle";
import { useState } from "react";
import PopularClassCard from "./PopularClassCard";
import usePopularClassesData from "../../../hooks/usePopularClassesData";

const PopularClasses = () => {
 
  const [popularClasses, refetch] = usePopularClassesData(); 
  // const [popularClasses, setPopularClasses] = useState([]);
  // useEffect(() => {
  //   axiosInstance("/popular-classes").then((res) => {
  //     console.log(res.data);
  //     setPopularClasses(res.data);
  //   });
  // }, []);
  return (
    <div>
      <div className="">
        <SectionTitle title={"Popular Classes"}></SectionTitle>
      </div>
      <div className="mt-16 gap-4 gap-y-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center items-center">
        {popularClasses.map((popularClass) => (
          <PopularClassCard 
          key={popularClass._id}
          popularClass = {popularClass}
          ></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
