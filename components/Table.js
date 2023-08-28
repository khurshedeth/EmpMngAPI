import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import data from "../database/data.json"
function Table() {
  return (
    <table className=" min-w-full table-auto mt-1">
      <thead>
        <tr className=" bg-black">
          <th className=" px-16 py-2 text-white ">
            <span className=" text-gray-200">Name</span>
          </th>
          <th className=" px-16 py-2 text-white ">
            <span className=" text-gray-200">Email</span>
          </th>
          <th className=" px-16 py-2 text-white ">
            <span className=" text-gray-200">Salary</span>
          </th>
          <th className=" px-16 py-2 text-white ">
            <span className=" text-gray-200">Birthday</span>
          </th>
          <th className=" px-16 py-2 text-white ">
            <span className=" text-gray-200">Status</span>
          </th>
          <th className=" px-16 py-2 text-white ">
            <span className=" text-gray-200">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className=" bg-gray-200">{data.map((Object,i)=><Tr {...Object} key={i}/>)}</tbody>
    </table>
  );
}
export default Table;

function Tr({id,name,avatar,email,salary,date,status}) {
  return (
    <tr className=" bg-gray-50 text-center">
      <td className=" px-16 py-2 flex flex-row items-center">
        <img src="#" alt="/" />
        <span className=" ml-4 font-bold text-center">{name}</span>
      </td>
      <td className=" px-16 py-2">
        <span className=" bg-gray-50 font-bold">{email}</span>
      </td>
      <td className=" px-16 py-2">
        <span className=" bg-gray-50 font-bold">${salary}</span>
      </td>
      <td className=" px-16 py-2">
        <span className=" bg-gray-50 font-bold">{date}</span>
      </td>
      <td className=" px-16 py-2">
        <span className=" bg-green-500 py-1 px-6 rounded-xl text-white">
          {status}
        </span>
      </td>
      <td className=" px-16 py-2">
        <button className=" ml-2 text-green-300 text-2xl">
          <BiEditAlt />
        </button>
        <button className=" ml-6 text-red-400  text-2xl">
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
}
