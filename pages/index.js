import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/Table";
import Form from "../components/Form";
import { useState } from "react";
export default function Home() {
  const[visible,setVisible]=useState(false);

  const hnadler=()=>{
    setVisible(!visible)
  }
  
  return (
    <div>
      <Head>
        <title>Employee Crud_App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className=" text-5xl md:text-4xl  text-center mt-12 font-bold font-serif">
          Employee Management
        </h1>
        <div className=" container mx-auto flex justify-between py-6 border-b-2">
          <div className="flex gap-3 left">
            <button onClick={hnadler} className=" flex bg-blue-400 py-2 px-4 text-white rounded-md hover:bg-indigo-300 hover:text-gray-800">
              Add Employee
              <span className=" px-1">
                <BiUserPlus size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
        {visible?<Form/>:""}
        </div>
        <div className=" conatiner mx-auto">
          <Table />
        </div>
      </main>
    </div>
  );
}