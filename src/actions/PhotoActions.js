import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { PHOTO_UPDATE, PHOTO_CREATE, PHOTO_GETLIST_SUCCESS } from './types';

export const photoUpdate = (prop, value) => {
    return {
        type: PHOTO_UPDATE,
        payload: { prop, value }
    };
};

// ==========- Ngepush Photo ke database -===========\\

export const photoCreate = (photo, caption) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/photo`)
            .push({ photo, caption })
            .then(() => {
                dispatch({ type: PHOTO_CREATE });
            });
    };
};

// ==========- Ngambil Photo -===========\\

export const getPhotoList = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/photo`)
            .on('value', snapshot => {
                console.log(snapshot.val())
                dispatch({ type: PHOTO_GETLIST_SUCCESS, payload: snapshot.val() });
            });
    };
};


// ==========- Simpan Photo -===========\\

export const photoSave = (photo, caption) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/photo/${uid}`)
            .set({ photo, caption })
            .then(() => {
                dispatch({ type: PHOTO_CREATE });
            });
    };
};

// ==========- Delete Photo -===========\\

export const photoDelete = (uid) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/photo/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: PHOTO_CREATE });
            });
    };
};