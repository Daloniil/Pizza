import {actionsType} from "../redux-store";
import {ReducerType} from "../../Types/Type";

import photoId49 from "../../Assets/Drink/Сік-яблучно-гранатовий-300x300.webp"
import photoId50 from "../../Assets/Drink/pepsi_bottle_600_square.webp"
import photoId51 from "../../Assets/Drink/Сік-мультивітамін-300x300.webp"
import photoId52 from "../../Assets/Drink/Сік-яблучно-виноградний-300x300.webp"


let initialState = {
    drink: [
        {
            id: 49,
            photoURL: photoId49,
            name: "Сік яблучно-гранатовий 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 50,
            photoURL: photoId50,
            name: "Pepsi 1 л",
            cost: 25,
            structure: "",
            amount: 1

        },
        {
            id: 51,
            photoURL: photoId51,
            name: "Сік мульти-вітамінний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 52,
            photoURL: photoId52,
            name: "Сік яблучно-виноградний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },

    ] as Array<ReducerType>,


};

export type initialStateType = typeof initialState


const newDrinkReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "NEWDRINK": {
            return <initialStateType>{
                ...state,
                drink: [...state.drink, ...action.drink]
            }
        }

        default:
            return state;

    }

}


type ActionsTypes = actionsType<typeof actions>


export const actions = {
    newdrinkAC: (drink: Array<initialStateType>) => {
        return {
            type: "NEWDRINK",
            drink,
        } as const
    }

}


export default newDrinkReducer;