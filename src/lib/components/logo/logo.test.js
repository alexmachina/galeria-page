import React from "react";
import renderer from "react-test-renderer";
import Logo from "./";

describe("Components", () => {
  describe("Logo", () => {
    it("Renders", () => {
      const tree = renderer.create(<Logo />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
