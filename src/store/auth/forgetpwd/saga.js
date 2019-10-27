import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FORGET_USER } from './actionTypes';
import { apiError } from './actions';

// AUTH related methods
import { postForgetPwd } from '../../../helpers/authUtils';

//If user is login then dispatch redux action's are directly from here.
function* forgetUser({ payload: { username, history } }) {
        try {
            console.log("In saga..."+username);
            const response = yield call(postForgetPwd, '/forget-pwd', {email: username});
            if(response)
               history.push('/reset-password');
        } catch (error) {
            yield put(apiError(error));
        }
}

export function* watchUserForget() {
    yield takeEvery(FORGET_USER, forgetUser)
}

function* forgetSaga() {
    yield all([fork(watchUserForget)]);
}

export default forgetSaga;