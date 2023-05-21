import React from "react";
import { Notification } from "../../UI/Notification/Notification";

export const BodyNotifications = () => {
  return (
    <div className="w-screen h-full grid gap-10 py-10 place-items-center md:grid-cols-2 xl:grid-cols-3 pb-40 md:ml-20">
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </div>
  );
};
