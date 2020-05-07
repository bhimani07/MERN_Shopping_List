import { GET_ERORRS, CLEAR_ERRORS } from './types';

// RETURN ERRORS 
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERORRS,
        payload: { msg, status, id }
    };
};

//CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};