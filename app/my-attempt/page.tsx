import Link from "next/link";
import { mockTeacher } from "@/my-attempt-files/data/mockTeacher";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Teacher Dashboard
      </h1>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Teachers</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href={`my-attempt/teachers/${mockTeacher.id}`}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 border border-gray-100"
            >
              <div className="text-blue-600 bg-blue-100 p-3 rounded-full text-xl">
                <FaChalkboardTeacher />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">
                  {mockTeacher.name}
                </p>
                <p className="text-sm text-gray-500">{mockTeacher.role}</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
