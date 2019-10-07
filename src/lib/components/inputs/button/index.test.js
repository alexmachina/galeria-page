import React from "react";
import renderer from "react-test-renderer";
import Button from "./";

describe("Components", () => {
  describe("Header", () => {
    it("Renders correctly", () => {
      const tree = renderer
        .create(<Button title="Magic" onClick={a => a} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
