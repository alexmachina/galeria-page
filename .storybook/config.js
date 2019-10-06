import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GaleriaPage from "../src/lib/components/app";

addDecorator(storyFn => <GaleriaPage>{storyFn()}</GaleriaPage>);
configure([require.context("../src", true, /\.stories\.js$/)], module);
