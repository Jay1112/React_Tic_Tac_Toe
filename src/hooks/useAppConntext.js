import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export function useAppContext(){
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Problem while making App Context");
    }

    return context ;
}