import React, { act } from 'react'
import { ADDTODODATA, DELETETODODATA, GETTODODATA } from './ActionTypes'

const initialState = {
    todo: [],
    count: 0
}


export default function Reducer(state = initialState, action) {
    // reducer is a pure function  simple vlue does read promises
    // console.log(action.payload)
    switch (action.type) {
        case ADDTODODATA:
            return { ...state, todo: [...state.todo, action.payload] }


        case GETTODODATA:
            // data is globally stored 
            return { ...state, todo: action.payload }


        case DELETETODODATA:
            return { ...state, todo: [...state.todo].filter((item) => item.id != action.payload) }
        default:
            return state
    }


}
