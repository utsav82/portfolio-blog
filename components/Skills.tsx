import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Skills = () => {
  return (
    <div className="mt-16 p-4 space-y-6">
      <div className="grid gap-2 grid-rows-2 sm:grid-cols-2 sm:grid-rows-none">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-5">
              Competitive Programmer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Max. CodeForces Rating 1553 (specialist) under handle{" "}
                <a
                  target="_blank"
                  href="https://codeforces.com/profile/Utsav82"
                >
                  Utsav82
                </a>
              </li>
              <li>
                Max. CodeChef Rating 1945 (4 star) under handle{" "}
                <a
                  target="_blank"
                  href="https://www.codechef.com/users/utsav82"
                >
                  Utsav82
                </a>
              </li>
              <li>
                Secured Global rank 45 in Codechef Starters 107 Division 2{" "}
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-5">
              Web Developer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                I specialize in web development and have knowledge in core web
                technologies like HTML, CSS, JavaScript, and SQL.
              </li>
              <li>
                Proficient in frameworks like React.js, Next.js, Node.js,
                Express.js, and styling with Tailwind CSS. Experienced with
                tools like Visual Studio Code, Git/GitHub, and databases such as
                MongoDB and Mysql.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
