import {actionsType} from "../redux-store";
import {ReducerType} from "../../Types/Type";


import photoId41 from "../../Assets/Pizza/Premium.png.pagespeed.ce.3YPAVJIKMJ.webp"
import photoId42 from "../../Assets/Pizza/Fermerska.png.pagespeed.ce.p_Y-0X0Wda.webp"
import photoId43 from "../../Assets/Pizza/Margarita.png.pagespeed.ce.4RN5qhb1BY.webp"
import photoId44 from "../../Assets/Pizza/Selyanska.webp"

let initialState = {
    pizza: [
        {
            id: 41,
            photoURL: photoId41,
            name: "Преміальна",
            cost: 86,
            structure: "Склад: томатний соус, сир сулугуні, грудинка, шинка, пармезан, петрушка",
            amount: 1

        },
        {
            id: 42,
            photoURL: photoId42,
            name: "Фермерська",
            cost: 84,
            structure: "Склад: соус вершковий, сир сулугуні, балик, шинка, кукурудза, чеддер, кріп",
            amount: 1

        },
        {
            id: 43,
            photoURL: photoId43,
            name: "Маргаріта",
            cost: 64,
            structure: "Склад: соус томатний, сир моцарела, помідори, сир сулугуні, орегано",
            amount: 1

        },
        {
            id: 44,
            photoURL: photoId44,
            name: "Селянська",
            cost: 70,
            structure: "Склад: соус томатний, сир сулугуні, балик, куряче філе, кріп",
            amount: 1

        },


    ] as Array<ReducerType>,
    siza: 28 as number,
    ves: 370 as number


};

export type initialStateType = typeof initialState


const newPizzaReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "NEWPIZZA": {
            return <initialStateType>{
                ...state,
                pizza: [...state.pizza, ...action.pizza]
            }
        }

        default:
            return state;

    }

}


type ActionsTypes = actionsType<typeof actions>

export const actions = {
    newpizzaAC: (pizza: Array<initialStateType>) => {
        return {
            type: "NEWPIZZA",
            pizza: pizza,
        } as const
    }

}


export default newPizzaReducer;