import { Middleware } from 'redux';
import { ACTION_TYPES } from './types';

const asyncTimeout = async (fn: any, ms: number = 2000) => {
    setTimeout(() => {
        Promise.resolve(fn());
    }, ms);
};

export const acyncIncreaceMiddleware: Middleware = () => (next: any) => {
    return async (action: any) => {
        if (action.type === ACTION_TYPES.INCREACE_COUNT) {
            await asyncTimeout(() => {
                return next(action);
            }, 2000);
        } else {
            return next(action);
        }
    }
}