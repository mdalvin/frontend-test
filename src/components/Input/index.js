import React, { useState } from "react";
import axios from "axios";
import {
  InputButton,
  InputContainer,
  InputField,
  InputForm,
  InputWrapper,
} from "./InputElements";
import { MdAdd } from "react-icons/md";


const Input = () => {
  const [product, setProduct] = useState("");
  const url = "http://94.74.86.174:8080/checklist";
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg";


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      product: product,
    };

    console.log(data);

    axios
      .post(url, data, {
        headers: { token: token },
      })
      .then(() => {
        return window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <InputContainer>
        <InputWrapper>
          <InputForm onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="product"
              placeholder="Add new product here"
              required
              onChange={(e) => setProduct(e.target.value)}
            />
            <InputButton type="submit">
              <MdAdd />
            </InputButton>
          </InputForm>
        </InputWrapper>
      </InputContainer>
    </>
  );
};

export default Input;
