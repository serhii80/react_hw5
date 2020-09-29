import { AppState } from "..";

export const getCountValue = (state: AppState): number => state.counter.count;