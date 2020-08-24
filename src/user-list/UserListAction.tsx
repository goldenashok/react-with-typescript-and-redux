import { Action, Dispatch } from 'redux';
import axios from 'axios';
import { USERLIST } from "../helpers/constants";
import { Activity_objects, Userlist } from './model/user.model';

export enum UserListActionType {
    FETCH_USER_LIST = 'FETCH_USER_LIST',
    FETCH_USER_LIST_ERROR = 'FETCH_USER_LIST_ERROR',
    COUNTER_INCREMENT = 'COUNTER_INCREMENT',
    COUNTER_DECREMENT = 'COUNTER_DECREMENT'
}

export interface CounterIncrementAction extends Action {
    type: UserListActionType.COUNTER_INCREMENT;
}

export interface CounterDecrementAction extends Action {
    type: UserListActionType.COUNTER_DECREMENT;
}


export interface UserFetchList extends Action {
    type: UserListActionType.FETCH_USER_LIST;
    payload: any;
}

export interface UserFetchError extends Action {
    type: UserListActionType.FETCH_USER_LIST_ERROR;
    payload: any;
}

export interface FetchUserResponse {
    data: Array<Activity_objects>
}

export const getUserData: any = () => {
    return (dispatch: Dispatch) => {
        axios.get(USERLIST)
            .then((res) => {
                dispatch({ type: UserListActionType.FETCH_USER_LIST, payload: res.data.members });
            })
            .catch((err: Error) => {
                dispatch({ type: UserListActionType.FETCH_USER_LIST_ERROR, payload: err });
            })
    }
}

export const incrementCounter: any = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: UserListActionType.COUNTER_INCREMENT });
    };
};

export const decrementCounter: any = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: UserListActionType.COUNTER_DECREMENT });
    }
}