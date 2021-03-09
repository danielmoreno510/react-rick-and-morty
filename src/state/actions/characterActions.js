import {FETCH_CHARACTER, PUT_CHARACTER} from './types'

export const fetchCharacter = (ids) => ({
    type: FETCH_CHARACTER,
    ids
})

export const putCharacter = (character) => ({
    type: PUT_CHARACTER,
    character
})