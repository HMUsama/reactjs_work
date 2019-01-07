// import { firestore } from "firebase";
export const signIn = (credentails) =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentails.email,
            credentails.password
        ).then(()=>{
            dispatch({type:'Login_SuccessFull'});
        }).catch((err)=>{
            dispatch({type:'Login_Error',err});
        });
    }
}

export const signUp = (newUser) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            return firestore.collection("users").doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName:  newUser.lastName,
                initails:  newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type:'SIGNUP_SUCCESS' })
        }).catch((err) => {
            dispatch({ type:'SIGNUP_ERROR',err });
        });
    }
}

export const signOut = () =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=>{
            console.log("LogOut_SuccesFull**Action**")
            dispatch({type:'LogOut_SuccessFull'});
        })
    }
}