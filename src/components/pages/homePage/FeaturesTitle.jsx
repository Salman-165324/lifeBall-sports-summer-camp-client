import { useInView } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useFeatureStore } from './featureStatesStore';

const FeaturesTitle = ({children, id}) => {
    const ref = useRef(null); 
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"}); 
    const baseClassNames = "pb-32 lg:pb-44 font-bold md:text-3xl xl:text-4xl text-gray-300 transition-colors";
    const classNamesForHighlighting = isInView? "text-green-700" : "text-gray-300"; 
    const finalClassNames = `${baseClassNames} ${classNamesForHighlighting}`
    const setInViewFeature = useFeatureStore( state => state.setInViewFeature); 
    const inViewFeature = useFeatureStore((state) => state.inViewFeature); 
    useEffect (() => {
        if (isInView) setInViewFeature(id); 
        if(!isInView && inViewFeature === id) setInViewFeature(null); 
    }, [id, inViewFeature, isInView, setInViewFeature])

    return (
        <p ref={ref} 
        className = {finalClassNames}
        >{children}</p>
    );
};

export default FeaturesTitle;