import { LOCAL_DATA_KEY } from "../constants/extra";

export function increaseWinCount(){
    if(localStorage.getItem(LOCAL_DATA_KEY)){
        const data = JSON.parse(localStorage.getItem(LOCAL_DATA_KEY));
        if(data){
            let updatedData = {
                ...data,
                "won" : data["won"] + 1,
            }
            console.log(updatedData);
            localStorage.setItem(LOCAL_DATA_KEY,JSON.stringify(updatedData));
        }
    }
}

export function increaseLoseCount(){
    if(localStorage.getItem(LOCAL_DATA_KEY)){
        const data = JSON.parse(localStorage.getItem(LOCAL_DATA_KEY));
        if(data){
            let updatedData = {
                ...data,
                "lose" : data["lose"] + 1,
            }
            console.log(updatedData);
            localStorage.setItem(LOCAL_DATA_KEY,JSON.stringify(updatedData));
        }
    }
}

export function increaseDrawCount(){
    if(localStorage.getItem(LOCAL_DATA_KEY)){
        const data = JSON.parse(localStorage.getItem(LOCAL_DATA_KEY));
        if(data){
            let updatedData = {
                ...data,
                "draw" : data["draw"] + 1,
            }
            console.log(updatedData);
            localStorage.setItem(LOCAL_DATA_KEY,JSON.stringify(updatedData));
        }
    }
}