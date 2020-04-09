export default function (state=[],action){
    switch (action.type) {
        case 'GET_TWEETS':
            return [...action.tweets]

        case 'ADD_TWEET':
            return [...state,action.preload]
            
        default:
            return state
    }
}