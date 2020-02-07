import { INSERT_TODO , TOGGEL_TODO } from './types';

let initId =0

export const inserttodo = row => {
    return{
        type: INSERT_TODO,
        payload: {
            id:++initId,
            content: row
        }
    }
}

export const toggeltodo = id => {
    return{
        type: TOGGEL_TODO,
        payload: {
            id
        }
    }
}