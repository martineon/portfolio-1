// @flow
import fire from '../../firebase';
import swal from 'sweetalert';


const firestore = fire.firestore()
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const DELETE_USER = 'DELETE_USER'
export const ADD_USERS = 'ADD_USERS'


export const fetchUsersStart = () => {
    return {
        type: FETCH_USERS_START
    }
}

export const fetchUsersSuccess = (users: Array<Object>) => {
    return {
        type: FETCH_USERS_SUCCESS,
        users
    }
}

// export const addUsers = (user: Object) => {
//     return {
//         type: ADD_USERS,
//         user
//     }
// }


export const fetchUsers = () => {
    const fetchUsersDispatch = (dispatch: Function) => {
        let users = ''
        dispatch(fetchUsersStart())
        firestore.collection("users")
            .onSnapshot((doc) => {
                users = doc.docs.map((x) => {
                    let user = x.data()
                    user.id = x.id
                    return user
                })
                dispatch(fetchUsersSuccess(users))
            })
    }
    return fetchUsersDispatch
}

export const addUser = (first: string, last: string, born: number) => {
    const addUser = (dispatch: Function) => {
        firestore.collection("users").get().then((user) => {
            const users = user.docs.some((x) => x.data().first === first ? swal('Oops...', 'Something went wrong!', 'error') : firestore.collection("users").add({
                    first: first,
                    last: last,
                    born: born
                })
                .then((docRef) => {})
                .catch((error) => {
                    console.error("Error adding document: ", error);
                }))
            return users
        });
    }
    return addUser
}

export const deleteUsers = (userID: string) => {
    const deleteUser = (dispatch: Function) => {
        firestore.collection("users").doc(userID).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return deleteUser
}