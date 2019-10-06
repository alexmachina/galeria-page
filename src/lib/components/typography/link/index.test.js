import React from "react";
import renderer from "react-test-renderer";
import Link from ".";

describe("Components", () => {
  describe("Link", () => {
    it("Renders", () => {
      const tree = renderer
        .create(<Link to="google.com.br">Google it!</Link>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
