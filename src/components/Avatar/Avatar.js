import React from "react";
import "./avatar.scss";

export default function Avatar({
  user_name,
  user_surname,
  user_description,
  user_site_url,
  user_avatar_url
}) {

  return (
    <div className="avatar">
      {user_avatar_url
      ? <img src={user_avatar_url} alt="avatar" className="image" />
      : <div className="image" />}
      <span>Name: {user_name && user_name}</span>
      <span>Surname: {user_surname && user_surname}</span>
      <span>Description: {user_description && user_description}</span>
      <span>Site url: {user_site_url && user_site_url}</span>
    </div>
  );
}
