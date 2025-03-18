import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === Number(id))
  );

  if (!user) return <h2>Пользователь не найден</h2>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
      <p>Компания: {user.company.name}</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default UserDetails;