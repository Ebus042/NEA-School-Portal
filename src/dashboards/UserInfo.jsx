import React from "react";
import { userInfos } from "../../data";

const UserInfo = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">User Info</h2>

      {userInfos.map((info, index) => (
        <ul key={index} className="space-y-2 text-gray-500">
          <li>
            {" "}
            <strong>Name: </strong>
            {info.userName}
          </li>
          <li>
            {" "}
            <strong>Department: </strong>
            {info.userDepartment}
          </li>
          <li>
            {" "}
            <strong>Level: </strong>
            {info.userLevel}
          </li>
          <li>
            {" "}
            <strong>Student ID: </strong>
            {info.UserId}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UserInfo;
