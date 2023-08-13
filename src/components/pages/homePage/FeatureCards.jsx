import classNames from 'classnames';
import { useFeatureStore } from './featureStatesStore';
import meetingImg from '../../../assets/featuresImages/meeting.webp'
import injuredImg from '../../../assets/featuresImages/injured.webp'
import calenderImg from '../../../assets/featuresImages/calender.webp'
import freeSessionImg from '../../../assets/featuresImages/free session.webp'
import interpersonalImg from '../../../assets/featuresImages/interpersonal.webp'
import specialKidsImg from '../../../assets/featuresImages/special kids.webp'

 const FeatureCards = ({img, id}) => {
    const inViewFeature = useFeatureStore((state) => state.inViewFeature); 
      {/* inViewFeature === id ? "opacity-100": "opacity-0" */}
    return (
        <div 
            className= { classNames(
                "", 
                 inViewFeature !== id? "hidden": "block"

            )

            }
        >
        <img className='object-cover' src= {img} />
          
        </div>
    );
};

export default FeatureCards; 

export const Meeting = ({ id }) => {
    return (
      <FeatureCards id={id} img ={meetingImg} >
   
      </FeatureCards>
    );
  };
  
export const Calender = ({ id }) => {
    return (
      <FeatureCards id={id} img ={calenderImg}>
        <span />
      </FeatureCards>
    );
  };
  
export const SpecialKid = ({ id }) => {
    return (
      <FeatureCards id={id} img ={specialKidsImg}>
        <span />
      </FeatureCards>
    );
  };

  export const Injured = ({ id }) => {
    return (
      <FeatureCards id={id} img ={injuredImg}>
        <span />
      </FeatureCards>
    );
  };
  
  export const FreeSession = ({ id }) => {
    return (
      <FeatureCards id={id} img ={freeSessionImg}>
        <span />
      </FeatureCards>
    );
  };
  
  
  export const Interpersonal = ({ id }) => {
    return (
      <FeatureCards id={id} img ={interpersonalImg}>
        <span />
      </FeatureCards>
    );
  };
  
  