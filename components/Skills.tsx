"use client";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
interface Achievement {
  text: string;
  url: string;
}
const sidebarNavItems = [
  {
    title: "Competitive Programming",
    value: 0,
  },
  {
    title: "Web Development",
    value: 1,
  },
];

const bullets = [
  {
    achievements: [
      {
        text: "Max. CodeForces Rating 1639 (expert) under handle",
        url: "https://codeforces.com/profile/Utsav82",
      },
      {
        text: "Max. CodeChef Rating 2008 (5 star) under handle",
        url: "https://www.codechef.com/users/Utsav82",
      },
      {
        text: "Secured Global rank 45 in Codechef Starters 107 Division 2",
        url: null,
      },
    ],
  },
  {
    achievements: [
      {
        text: "I specialize in web development and have knowledge in core web technologies like HTML, CSS, JavaScript, and SQL.",
        url: null,
      },
      {
        text: "Proficient in frameworks like React.js, Next.js, Node.js, Express.js, and styling with Tailwind CSS. Experienced with tools like Visual Studio Code, Git/GitHub, and databases such as MongoDB and Mysql.",
        url: null,
      },
    ],
  },
];

export default function SettingsLayout() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      <div className="sm:my-36 space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
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
              <ul className="list-disc pl-6 mt-5">
                {bullets[activeTab].achievements.map((achievement, idx) => (
                  <li className="my-5" key={idx}>
                    {achievement.url !== null ? (
                      <div>
                        {" "}
                        {achievement.text}
                        <a
                          href={achievement.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Utsav82
                        </a>
                      </div>
                    ) : (
                      achievement.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
