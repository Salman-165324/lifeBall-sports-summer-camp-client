import { set } from 'react-hook-form'
import {create} from 'zustand'


export const useFeatureStore = create ((set) => ({
    inViewFeature: null, 
    setInViewFeature: (feature) => set({inViewFeature : feature})
}))