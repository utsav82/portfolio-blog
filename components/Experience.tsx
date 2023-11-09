"use client";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
const sidebarNavItems = [
  {
    title: "CrackDsa",
    value: 0,
  },
  {
    title: "Technical Sub Council HBTU",
    value: 1,
  },
];

const experience = [
  {
    title: "Web Developer Intern",
    date: "March - May 2023 ",
    company: "CrackDSA",
    responsibilities: [
      "Collaborated on both frontend and backend development of https://jobsearch.crackdsa.com, where I worked with React.js for creating frontend components using Tailwind-CSS and handled routing logic with react-router.",
      "Implemented a robust CRUD backend with authentication and search with filter functionalities for job items using Express.js, Node.js, and MongoDB.",
    ],
  },
  {
    title: "Associate Head Web development",
    date: "Feb 2023 - Present",
    company: "Technical Sub Council HBTU",
    responsibilities: [
      "Maintained the official event site of Technika’23, using Next.js framework and Typescript.",
      "Contributed to the development of the Team page and maintained various Events pages, enhancing accessibility and providing timely updates for participants.",
    ],
  },
];

export default function SettingsLayout() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      <div className="sm:my-36 space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <nav
              className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"
              )}
            >
              {sidebarNavItems.map((item) => (
                <button
                  onClick={() => setActiveTab(item.value)}
                  key={item.value}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    activeTab === item.value
                      ? "bg-muted hover:bg-muted"
                      : "hover:bg-transparent hover:underline",
                    "justify-start"
                  )}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="mb-4">
              <p className="text-lg font-bold">{experience[activeTab].title}</p>
              <p className="text-sm text-gray-500">
                {experience[activeTab].date}
              </p>
              <ul className="list-disc pl-6 mt-5">
                {experience[activeTab].responsibilities.map(
                  (responsibility, idx) => (
                    <li className="my-5" key={idx}>
                      {responsibility}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
