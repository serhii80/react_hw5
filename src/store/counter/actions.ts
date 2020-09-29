import { ACTION_TYPES } from './types';

export const increaseCount = () => {
    return {
        type: ACTION_TYPES.INCREACE_COUNT,
        payload: 'HELLO WORLD',
    }
}

export const decreaseCount = () => {
    return {
        type: ACTION_TYPES.DECREACE_COUNT,
        payload: 'HELLO WORLD',
    }
}