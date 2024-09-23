"use client";
import Image from "next/image";
import { useState } from "react";
import EmployeeProfile from "../component/employeeProfile";

export default function Employee() {
  const menuItems = [
    { icon: "/images/sideNav/menu.png", label: "Menu One" },
    { icon: "/images/sideNav/menu2.png", label: "Menu Two" },
    { icon: "/images/sideNav/menu3.png", label: "Menu Three" },
    { icon: "/images/sideNav/menu4.png", label: "Menu Four" },
    { icon: "/images/sideNav/menu5.png", label: "Menu Five" },
    { icon: "/images/sideNav/menu6.png", label: "Menu Six" },
    { icon: "/images/sideNav/menu7.png", label: "Menu Seven" },
    { icon: "/images/sideNav/menu8.png", label: "Menu Eight" },
    { icon: "/images/sideNav/menu9.png", label: "Menu Nine" },
    { icon: "/images/sideNav/menu10.png", label: "Menu Ten" },
  ];

  const projectMembers = [
    {
      name: "Victor",
      role: "UI UX Team Lead",
      image: "",
      status: "offline",
      senior: true,
    },
    {
      name: "Alexa",
      role: "Sr. UI UX Designer",
      image: "",
      status: "online",
      senior: true,
    },
    {
      name: "Juliet",
      role: "Blockchain Dev. Team Lead",
      image: "",
      status: "online",
      senior: false,
    },
    {
      name: "Hina",
      role: "QA Team Lead",
      image: "",
      status: "offline",
      senior: false,
    },
    {
      name: "Steve",
      role: "UI UX Team Manager",
      image: "",
      status: "offline",
      senior: true,
    },
    {
      name: "Andrielle",
      role: "Sr. UI UX Designer",
      image: "",
      status: "online",
      senior: true,
    },
    {
      name: "Billie",
      role: "Blockchain Dev. Team Manager",
      image: "",
      status: "online",
      senior: false,
    },
    {
      name: "Alita",
      role: "QA Team Manager",
      image: "",
      status: "offline",
      senior: false,
    },
  ];

  return (
    <div className="bg-[#F8F7FF]">
      <header className="bg-[#F8F7FF] p-4 flex w-full  border-b border-gray-200">
        <div className="w-[40%] xl:w-[15%]">
          <h1 className="md:text-2xl text-right font-bold  text-[#181A2B]">
            UI Frontend
          </h1>
          <div className="text-xs text-right text-gray-500">Test</div>
        </div>
        <div className="flex justify-between items-center w-[90%] px-[5%]">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image
                  src="/images/image.png"
                  height={24}
                  width={24}
                  alt="search icon"
                />
              </div>
              <input
                type="search"
                id="default-search"
                className=" block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Quick Search"
                required
              />
            </div>
          </form>
          {/* <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-2">
        <Image src="/images/image.png" height={24} width={24} alt="search icon"/>
          <input
            type="text"
            placeholder="Quick Search"
            className="bg-transparent border-none focus:ring-0 text-sm"
          />
        </div> */}
          <div className="items-center space-x-4 hidden md:flex">
            <Image
              className="cursor-pointer scale-[1.5]"
              src="/images/chat.png"
              height={38}
              width={38}
              alt="search icon"
            />
            <Image
              className="cursor-pointer scale-[1.5]"
              src="/images/menu.png"
              height={38}
              width={38}
              alt="search icon"
            />
            <Image
              className="cursor-pointer scale-[1.5]"
              src="/images/notification.png"
              height={38}
              width={38}
              alt="search icon"
            />
            <Image
              className="cursor-pointer scale-[1.5]"
              src="/images/userNav.png"
              height={38}
              width={38}
              alt="search icon"
            />
          </div>
        </div>
      </header>
      <div className="flex h-screen bg-gray-100 w-[95%] mx-auto rounded-full pb-4">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-4 hidden md:block border-r border-gray-200 rounded-l-3xl">
          <nav>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 mb-4 pr-3  cursor-pointer ${
                  index === 5
                    ? "bg-blue-50 text-blue-600 rounded-full"
                    : "text-gray-600 hover:bg-gray-100 py-2 rounded-md "
                }`}
              >
                <div
                  className={`${
                    index === 5 ? "bg-[#2695FB] rounded-full p-3" : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    height={24}
                    width={24}
                    alt="search icon"
                  />
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden rounded-r-3xl">
          <EmployeeProfile />
        </main>
      </div>
    </div>
  );
}
