import produce from "immer";

import { FETCH_CHARACTER, PUT_CHARACTER } from "../actions/types";
import { orderCharacter } from "../../utils/dataUtils";

export const initialState = {
  character: [],
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_CHARACTER:
        draft.character = [];
        break;
      case PUT_CHARACTER:
        draft.character = orderCharacter(action.character);
        break;
      default:
        break;
    }
  });
