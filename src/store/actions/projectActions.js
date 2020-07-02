export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const database = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        database.collection('projects').add({
            ...project, //spread operator. spreads the object and neatly pushes it as desired category collections with the information already added. whatever is added after is added to the object
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => { //once object is pushed into database then do whatever is inside .then func.
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
}