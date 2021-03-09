import HomePage from "./HomePage";
import { fetchCharacter } from "../../state/actions";
import { StoreService } from "../../state/StoreService.js";

const mapStateToProps = (state) => ({
  character: state.character.character,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: (ids) => {
      dispatch(fetchCharacter(ids));
    },
  };
};
const HomePageContainer = StoreService.connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export default HomePageContainer;
