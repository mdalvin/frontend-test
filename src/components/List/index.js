import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  ListContainer,
  ListWrapper,
  SpinnerWrapper,
  TaskAction,
  TaskButton,
  TaskCard,
  TaskInfo,
  TaskP,
  TaskTextWrapper,
  TaskTitle,
  WelcomeH2,
  WelcomeWrapper,
} from "./ListElements";
import Swal from "sweetalert2";
import { Spinner } from "../../components";

const List = () => {
  const [products, setProducts] = useState([]);
  const url = "http://94.74.86.174:8080/checklist";
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          token:
            token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to retrieve this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1f386f",
      cancelButtonColor: "#fec14a",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(`http://94.74.86.174:8080/checklist/${id}`, {
            headers: { token: token },
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            return window.location.reload();
          });
        Swal.fire("Done!", "This note has been deleted.", "success");
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          icon: "error",
          text: "Relax, your product is still there",
          confirmButtonColor: "#1f386f",
          confirmButtonText: "Thank God !",
        });
      }
    });
  };

  return (
    <>
      <ListContainer>
        <WelcomeWrapper>
          <WelcomeH2>
            Welcome to <span style={{ color: "#FEE453" }}>Pro</span>
            <span style={{ color: "#FEC14A" }}>Store</span>
          </WelcomeH2>
        </WelcomeWrapper>
        <TaskTextWrapper>
          <TaskP>Your recorded products:</TaskP>
        </TaskTextWrapper>
        <ListWrapper>
          {products.length !== 0 ? (
            products.map((product) => (
              <TaskCard
                id={product.id}
                style={{ backgroundColor: "#FEE453" }}
              >
                <TaskInfo>
                  <TaskTitle>{product.name}</TaskTitle>
                </TaskInfo>
                <TaskAction>
                  <TaskButton to="/edit">
                    <MdEdit />
                  </TaskButton>
                  <TaskButton
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    <MdDelete />
                  </TaskButton>
                </TaskAction>
              </TaskCard>
            ))
          ) : (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          )}
        </ListWrapper>
      </ListContainer>
    </>
  );
};

export default List;
