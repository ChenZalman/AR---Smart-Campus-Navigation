import {BuildingContext } from "../Context/BuildingContext";
import { useContext } from "react";

export const useBuildingContext = () =>{
    const context = useContext(BuildingContext)

    if(!context){
        throw Error('BuildingContext must be used inside a BuildingContextProvider');
        
    }

    return context
}