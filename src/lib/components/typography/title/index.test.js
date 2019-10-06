import React from "react";
import renderer from "react-test-renderer";
import Title from ".";

describe("Components", () => {
  describe("Typography", () => {
    describe("Title", () => {
      it("Renders", () => {
        const tree = renderer.create(<Title>Galeria Page</Title>).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
