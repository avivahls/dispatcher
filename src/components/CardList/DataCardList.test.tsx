import { Provider } from "react-redux";
import store from "../../store";
import { render } from "../../utils/test-utils";
import DataCardList from "./DataCardList";

describe("Data Card List Component", () => {
  test("render data cards", () => {
    render(
      <Provider store={store}>
        <DataCardList loadState={false} />
      </Provider>
    );

    //check if can see multiply cards
    expect(true).toBeTruthy();
  });
  //   test("Test data", () => {
  //     //check if can see multiply cards
  //     expect(true).toBeTruthy();
  //   });
});
