import React from "react";
import renderer from "react-test-renderer";
import Header from "./";

describe("Components", () => {
  describe("Header", () => {
    it("Renders", () => {
      const tree = renderer.create(<Header />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
