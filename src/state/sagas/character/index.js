import {all} from 'redux-saga/effects'

import characterSaga from './characterSaga'

export default function * rootSaga () {
    yield all([
        characterSaga()
    ])
}