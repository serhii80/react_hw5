import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import counter, { CounterState } from './counter';
import auth, { AuthState, authMiddlewares } from './auth';
import boards, { BoardsState } from './boards';
import user, { UserState } from './userProfile';
import thunk from 'redux-thunk';

export interface AppState {
    auth: AuthState;
    counter: CounterState;
    boards: BoardsState;
    user: UserState;
}

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

export default function configureStore() {
    const rootReducer = combineReducers<AppState>({
        counter,
        auth,
        boards,
        user,
    });
    return createStore(
        rootReducer,
        undefined,
        composeEnhancers(applyMiddleware(...authMiddlewares, thunk)),
    );
}

export * from './counter';
export * from './auth';
export * from './boards';