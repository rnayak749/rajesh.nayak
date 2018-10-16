export default function(state = [], action) {
    switch (action.type) {
        case 'getUsers':
        return [action.payload, ...state];
    }
    return state;
}