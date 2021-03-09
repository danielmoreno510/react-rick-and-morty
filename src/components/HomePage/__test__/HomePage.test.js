import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import HomePage from "../HomePage";

configure({ adapter: new Adapter() });
const createTestProps = (otherProps) => ({
  isFetching: false,
  getArticles: jest.fn(),
  ...otherProps,
});

describe("HomePage component", () => {
  describe("WHEN the component is render", () => {
    const testProps = createTestProps();
    const wrapper = shallow(<HomePage {...testProps} />);

    it("THEN should display HomePage component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
