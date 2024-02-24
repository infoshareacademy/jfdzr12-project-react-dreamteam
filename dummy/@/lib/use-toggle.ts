import {useReducer} from 'react';

function toggle<T extends boolean>(state: T) {
    return !state;
}

export function useToggle(initial: boolean) {
    return useReducer(toggle, initial)
}
