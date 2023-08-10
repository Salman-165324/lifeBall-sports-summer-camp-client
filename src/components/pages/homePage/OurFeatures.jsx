import React from "react";
import FeaturesTitle from "./FeaturesTitle";
import FeatureCards, {
  Calender,
  FreeSession,
  Injured,
  Interpersonal,
  Meeting,
  SpecialKid,
} from "./FeatureCards";
import SectionTitle from "../../utils/SectionTitle";

const OurFeatures = () => {
  const features = [
    {
      title: "We teach Interpersonal skills, not just how to play.",
      id: "interpersonal skills",
      card: Interpersonal,
    },
    {
      title:
        "Check your calender to see which activity your kid will be doing next.",
      id: "calender",
      card: Calender,
    },

    {
      title: "Instantly know if your kid got injured while playing.",
      id: "injured",
      card: Injured,
    },

    {
      title:
        "After finishing the Camp, 1-1 Meeting with the guardian so that you understand what to do next.",
      id: "meeting",
      card: Meeting,
    },

    {
      title:
        "Free sessions to experience the camp live, before the actual program begins.",
      id: "free-sessions",
      card: FreeSession,
    },

    {
      title: "Special programs for special kids.",
      id: "special-kids",
      card: SpecialKid,
    },
  ];

  return (
    <div className="secondary-container -mb-96 lg:-mb-60">
      <div className="-mb-64 lg:-mb-32 pt-16 lg:pt-20">
        <SectionTitle title={"Our Features"}></SectionTitle>
      </div>
      <div className="flex w-full gap-4 md:gap-10 xl:gap-20 items-start">
        {/* Flex part 1 */}
        <div className=" w-full py-[60vh] md:py-[55vh]">
          <ul className="">
            {features.map((feature) => (
              <li key={feature.id}>
                <FeaturesTitle id={feature.id}>{feature.title}</FeaturesTitle>
              </li>
            ))}
          </ul>
        </div>

        {/* Flex part 2 */}
        <div className="w-full sticky top-[4%] flex h-screen items-center">
          <div className="bg-gray-100 relative w-full aspect-square rounded-2xl">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
