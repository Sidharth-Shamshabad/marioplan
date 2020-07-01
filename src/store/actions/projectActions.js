export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const database = getFirestore();
        database.collection('projects').add({
            ...project, //spread operator. spreads the object and neatly pushes it as desired category collections with the information already added. whatever is added after is added to the object
            authorFirstName: 'Sidharth',
            authorLastName: 'Shamshabad',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => { //once object is pushed into database then do whatever is inside .then func.
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
}