const redux = require('redux')
const createStore = redux.createStore;

const BUY_ITEM = 'BUY_ITEM'
const buy = () => {
    return {
        type: BUY_ITEM
    }
}
const INITIAL_STATE = {
    no_of_item: 20
}

const reducer = ((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUY_ITEM:
            return {
                ...state,
                no_of_item: state.no_of_item - 1
            }
        default:
            return { ...state }
    }
})

const store = createStore(reducer);
const unsubscribe= store.subscribe(() => {
    console.log(`Updated state : `, store.getState())
})
store.dispatch(buy()); 
store.dispatch(buy()); 
store.dispatch(buy());
unsubscribe();
