const INCREMENT = 'INCREMENT'; // Define a constant for increment action types

const DECREMENT = 'DECREMENT'; // Define a constant for increment action types

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives.

const incAction = null; // Define an action creator for incrementing 

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers.

