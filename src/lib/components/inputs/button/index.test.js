import React from "react";
import renderer from "react-test-renderer";
import Button from "./";

describe("Components", () => {
  describe("Header", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<Button />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
