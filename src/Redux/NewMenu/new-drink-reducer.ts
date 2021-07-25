import {actionsType, BaseThunkType} from "../redux-store";


export type DrinkType = {
    id: number
    photoURL: string
    name: string
    cost: number,
    structure: string,
    amount: number
}

let initialState = {
    drink: [
        {
            id: 49,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/01/Сік-яблучно-гранатовий-300x300.png',
            name: "Сік яблучно-гранатовий 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 50,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/09/pepsi_bottle_600_square.png',
            name: "Pepsi 1 л",
            cost: 25,
            structure: "",
            amount: 1

        },
        {
            id: 51,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/02/Сік-мультивітамін-300x300.png',
            name: "Сік мульти-вітамінний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 52,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/02/Сік-яблучно-виноградний-300x300.png',
            name: "Сік яблучно-виноградний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },

    ] as Array<DrinkType>,


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

export type ThunkType = BaseThunkType<ActionsTypes>


export const actions = {
    newdrinkAC: (drink: Array<initialStateType>) => {
        return {
            type: "NEWDRINK",
            drink,
        } as const
    }

}


export default newDrinkReducer;