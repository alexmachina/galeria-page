import React, { useState } from "react";
import TextInput from ".";

export default {
  component: TextInput,
  title: "Components|Inputs/Text"
};

export const Default = () => {
  const [value, onChange] = useState("");
  return <TextInput value={value} label="Usuário" onChange={onChange} />;
};
