import { CURRENT_USER, SET_CURRENT_USER } from "./types"

export const getUser = () => {
    return {
        type: CURRENT_USER,
    }
}

export const setUser = () => {
    return {
        type: SET_CURRENT_USER,
    }
}