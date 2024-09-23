import Image from "next/image";

const tasks = [
  {
    name: "ZEN Roadmap, Boards backlog & Test Hub",
    code: "ZEN-01",
    priority: "High",
  },
  {
    name: "ZEN Roadmap, Boards backlog & Test Hub",
    code: "ZEN-01",
    priority: "Medium",
  },
  {
    name: "ZEN Roadmap, Boards backlog & Test Hub",
    code: "ZEN-01",
    priority: "low",
  },
];

export default function EmployeeProfile() {
  return (
    <div className="flex-1 overflow-y-auto p-6 pt-0 bg-white scrollbar scrollbar-track-blue-200 scrollbar-width-2 ">
      <div className="my-6">
        <div className="text-sm text-gray-500 mb-2">
          Project Frontend &gt; Project Members &gt; Employee Details
        </div>
        <h2 className="text-2xl font-bold text-[#181A2B] mb-4">
          Employee Details
        </h2>
      </div>

      {/* Employee Profile */}
      <div className="bg-white pt-0 rounded-lg shadow-sm mb-6">
        <div className="flex items-start space-x-4">
          <Image
            src="/images/employee.png"
            alt="Alexa"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="flex-1">
            <div className="bg-[#2695FB] text-white px-2 py-1 rounded-full text-xs font-semibold inline-block mb-2">
              Member
            </div>
            <h3 className="text-lg font-bold text-[#181A2B] mb-1">
              Welcome, Alexa
            </h3>
            <p className="text-gray-500 mb-1 text-sm">
              Manage your info, privacy, and security to make Frontend work
              better for you.
              <a href="#" className="text-[#2695FB] hover:underline text-sm">
              Learn more
            </a>
            </p>
            
          </div>
        </div>
      </div>

      {/* Ratings and Task Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Ratings */}
        <div className="bg-white p-6 pt-0 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-[#181A2B]">Ratings</h4>
            <Image
              src="/images/edit.png"
              alt="edit icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Image
              src="/images/ceo.png"
              alt="Batosh"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className=" flex justify-between items-center">
              <div>
                <h5 className="font-semibold text-[#181A2B]">Batosh</h5>
                <p className="text-sm text-gray-500">CEO</p>
              </div>

            </div>

          </div>
          <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
          <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Fringilla nunc etiam ornare
            massa. Volutpat commodo elementum ipsum lectus. Proin leo sit auctor
            semper.
          </p>
        </div>

        {/* Task Status */}
        <div className="bg-white p-6 pt-0 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-[#181A2B] mb-4">
            All task by complete status
          </h4>
          <div className="flex items-center justify-between">
          <div className="relative w-1/2 h-24">
          <Image
                  src="/images/chart.png"
                  height={100}
                  width={100}
                  alt="search icon"
                />
            </div>
            <div className="w-1/2 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">
                  55% Completed Task
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-sm text-gray-600">
                  30% Incompleted Task
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-600">15% Over due</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Task Lists */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Current & Upcoming", "Completed", "Failed"].map(
          (category, index) => (
            <div key={index} className="bg-white pb-6 rounded-lg shadow-sm">
              <h4 className="text-xs font-semibold pl-3 text-[#181A2B] bg-[#F7F7F7] mb-4 py-3 rounded-t-lg pl-">
                {category}
              </h4>
              <div className="px-3">
              {tasks.map((task, taskIndex) => (
                <div
                  key={taskIndex}
                  className={`p-4 rounded-lg mb-3 ${
                    index === 1
                      ? "bg-green-50"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h5
                    className={`font-semibold mb-2 text-sm  ${category === "Completed" && "line-through" } ${
                      index === 1 ? "text-[#1CCE66]" : "text-[#181A2B]"
                    }`}
                  >
                    {task.name}
                  </h5>
                  <div className="flex items-center gap-2">
                  <Image
              src="/images/zen.png"
              alt="zen"
              width={12}
              height={12}
              // className="rounded-full"
            />
                    <span className="text-[#181A2B] text-xs font-medium px-2.5 py-0.5 rounded">
                      {task.code}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        task.priority === "High"
                          ? "text-red-600"
                          : task.priority === "Medium"
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
              </div>
            </div>
            
          )
        )}
      </div>
    </div>
  );
}
