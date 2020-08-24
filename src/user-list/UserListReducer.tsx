import { UserListActionType, CounterIncrementAction, CounterDecrementAction, UserFetchList, UserFetchError } from "./UserListAction";

export interface InitialState {
    count: number;
    userData: any;
}

const initialState: InitialState = {
    count: 0,
    userData: []
};

type SubscriptionActoin = CounterIncrementAction | CounterDecrementAction | UserFetchList | UserFetchError;

export default (state = initialState, action: SubscriptionActoin) => {
    switch (action.type) {
        case UserListActionType.FETCH_USER_LIST:
            return {
                ...state,
                userData: action.payload
            }
        case UserListActionType.FETCH_USER_LIST_ERROR:
            return {
                ...state
            }
        case UserListActionType.COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };

        case UserListActionType.COUNTER_DECREMENT:
            return { ...state, count: state.count - 1 };

        default:
            return state;
    }
}