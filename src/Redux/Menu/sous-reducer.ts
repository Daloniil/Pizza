import {actionsType} from "../redux-store";
import {ReducerType} from "../../Types/Type";


import photoId33 from "../../Assets/Sous/IMG_20191218_142057_843-300x300.webp"
import photoId34 from "../../Assets/Sous/IMG_20191218_142048_558-300x300.webp"
import photoId35 from "../../Assets/Sous/IMG_20191218_142050_744-300x300.webp"
import photoId36 from "../../Assets/Sous/IMG_20191218_142053_301-300x300.webp"
import photoId37 from "../../Assets/Sous/IMG_20191218_142054_571-300x300.webp"
import photoId38 from "../../Assets/Sous/IMG_20191218_142058_636-300x300.webp"
import photoId39 from "../../Assets/Sous/IMG_20191218_142055_628-300x300.webp"
import photoId40 from "../../Assets/Sous/IMG_20191218_142047_336-1-300x300.webp"


let initialState = {
    sous: [
        {
            id: 33,
            photoURL: photoId33,
            name: "Сирний",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 34,
            photoURL: photoId34,
            name: "Часниковий",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 35,
            photoURL: photoId35,
            name: "Чилі гострий",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 36,
            photoURL: photoId36,
            name: "Барбекю",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 37,
            photoURL: photoId37,
            name: "Кисло-солодкий",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 38,
            photoURL: photoId38,
            name: "Тартар",
            cost: 10,
            structure: "",
            amount: 1

        }, {
            id: 39,
            photoURL: photoId39,
            name: "Паприка",
            cost: 10,
            structure: "",
            amount: 1

        }, {
            id: 40,
            photoURL: photoId40,
            name: "Французький",
            cost: 10,
            structure: "",
            amount: 1

        },


    ] as Array<ReducerType>,


};

export type initialStateType = typeof initialState


const sousReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SETSOUS" : {
            return <initialStateType>{
                ...state,
                sous: [...state.sous, action.sous]
            }
        }
        default:
            return state
    }
}


type ActionsTypes = actionsType<typeof actions>

export const actions = {
    setsousAC: (sous: Array<initialStateType>) => {
        return {
            type: "SETSOUS",
            sous: sous,
        } as const
    }

}


export default sousReducer
