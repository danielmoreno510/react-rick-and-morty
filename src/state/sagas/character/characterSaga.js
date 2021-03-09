import { takeLatest, put, call } from "redux-saga/effects";

import { putCharacter } from "../../actions";
import { FETCH_CHARACTER } from "../../actions/types";
import { readCharacter } from "../../../services/api/characterService";
import { handleHttpError } from "../../../services/httpUtils";

export function* fetchCharacterList({ids}) {
  const context = "fetchCharacterList saga";
  try {
    // Waits for the call to finish and puts the result in characters.
    const response = yield call(readCharacter, ids);
    // Dispatches an action to add the characters to the state tree.
    yield put(putCharacter(response));
  } catch (error) {
    handleHttpError(error, context, error.description);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchCharacterList() {
  yield takeLatest(FETCH_CHARACTER, fetchCharacterList);
}
