const initState = {
    post: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Some random text'},
        {id: '2', title: 'Charzard Laid an Egg', body: 'Some random text'},
        {id: '3', title: 'Pikachu Laid an Egg', body: 'Some random text'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;