import React from "react";
import TextInput from "./";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("Inputs", () => {
    describe("Text", () => {
      it("Renders correctly", () => {
        const tree = renderer
          .create(
            <TextInput
              label="Full Name"
              value="Javier Escuella"
              onChange={a => a}
            />
          )
          .toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
