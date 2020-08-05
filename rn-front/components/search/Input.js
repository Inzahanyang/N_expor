import React from "react";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: #fff;
  margin: 0px 30px;
  padding: 10px 20px;
  border-radius: 15px;
  margin-bottom: 50px;
`;

export default ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    returnKeyType={"search"}
    placeholder={placeholder}
  />
);
