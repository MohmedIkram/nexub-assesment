"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Homesection() {
    const [selectedMember, setSelectedMember] = useState(null);

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


      function ChatAvatar({ imageUrl, isOnline, size = "md" }) {
        const sizeClasses = {
          sm: "w-10 h-10",
          md: "w-[3.25rem] h-[3.25rem]",
          lg: "w-24 h-24",
        };
    
        const statusSizeClasses = {
          sm: "w-2.5 h-2.5",
          md: "w-4 h-4",
          lg: "w-5 h-5",
        };
    
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <div className="absolute inset-0 bg-blue-400 rounded-full">
              <div className="absolute inset-0.5 bg-white rounded-full overflow-hidden">
                <img
                  src={imageUrl}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className={`absolute bottom-0 right-0 ${
                statusSizeClasses[size]
              } rounded-full ${
                isOnline === "online" ? "bg-green-500" : "bg-red-500"
              } border-2 border-white`}
            />
          </div>
        );
      }

  return (
    <>
        {/* Project Members */}
        <div className="flex-1 overflow-y-auto p-6 bg-white  ">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">
                Project Frontend &gt; Project Members
              </div>
              <div className="flex gap-6 items-center mb-4">
                <h2 className="text-2xl font-bold text-[#181A2B]">
                  Project Members
                </h2>

                <form className="w-full xl:w-[458px]">
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
                      placeholder="search 08 employees"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectMembers.map((member, index) => (
                <div
                  key={index}
                  className={`${
                    member.senior ? "bg-[#f2f9ff] " : "bg-[#FFFAF0] "
                  }  p-6 rounded-lg shadow-sm flex flex-col items-center relative`}
                >
                  <ChatAvatar
                    imageUrl={"/images/user.png"}
                    isOnline={member.status}
                  />

                  <h3 className="font-bold text-base mb-1 text-[#181A2B] ">
                    {member.name}
                  </h3>
                  <p
                    className={`${
                      member.senior ? "text-[#51AAFC]" : "text-[#F9A602] "
                    } text-xs  mb-4`}
                  >
                    {member.role}
                  </p>
                  <Link href="/employee" onClick={() => setSelectedMember(member)} className="text-center border-2 border-[#2695FB] text-[#181A2B]  px-4 py-2 rounded-md hover:bg-blue-100 transition-colors w-full">
                    Visit Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-end gap-11 items-center p-4 bg-white border-t border-gray-200 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span>Items per page:</span>
              <select className="border-none bg-transparent text-gray-600 focus:ring-0">
                <option>10</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span>41 - 50 of 50</span>
              <div className="flex space-x-1">
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <Image
                    className="cursor-pointer rotate-180 "
                    src="/images/arrow.png"
                    height={10}
                    width={10}
                    alt="search icon"
                  />
                </button>
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <Image
                    className="cursor-pointer  rotate-180 "
                    src="/images/arrowSmall.png"
                    height={6}
                    width={6}
                    alt="search icon"
                  />
                </button>
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <Image
                    className="cursor-pointer  "
                    src="/images/arrowSmall.png"
                    height={6}
                    width={6}
                    alt="search icon"
                  />
                </button>
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <Image
                    className="cursor-pointer  "
                    src="/images/arrow.png"
                    height={10}
                    width={10}
                    alt="search icon"
                  />
                </button>
              </div>
            </div>
          </div>
    </>
  )
}