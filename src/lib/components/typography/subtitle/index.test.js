import React from "react";
import Subtitle from "./";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("Typography", () => {
    describe("Subtitle", () => {
      it("Renders correctly", () => {
        const tree = renderer
          .create(<Subtitle>Hello, There!</Subtitle>)
          .toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
