import React from "react";
import UsersList from "../components/UsersList/UsersList";
const Users = () => {
  const USERS = [{ id: 1, name: "kiran", places: 4, images: "image" }];
  return <UsersList items={USERS} />;
};

export default Users;
