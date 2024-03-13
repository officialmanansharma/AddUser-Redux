import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../store/slices/userSlice";
import { deleteUsers } from "../store/actions";

export const AddUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  const removeUser = (id) => {
    dispatch(deleteUser(id));
  };

  const removeAllUsers = () => {
    dispatch(deleteUsers());
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <Card
          sx={{
            width: "600px",
            padding: "20px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography variant="h5">List of User Details</Typography>
            <Button
              variant="contained"
              onClick={() => addNewUser(fakeUserData())}
            >
              Add New Users
            </Button>
          </Box>
          <Divider />
          {data.map((user, id) => (
            <Card
              key={`user_${id}`}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "20px 0 ",
                padding: "10px 15px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            >
              <Typography variant="h6">{user}</Typography>
              <Button variant="text" onClick={() => removeUser(id)}>
                <DeleteIcon />
              </Button>
            </Card>
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" onClick={removeAllUsers}>
              Clear All Users
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};
