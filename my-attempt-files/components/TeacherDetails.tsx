"use client";

import { Teacher } from "@/my-attempt-files/types/teacher";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  teacher: Teacher;
}

export default function TeacherDetails({ teacher }: Props) {
  return (
    <section className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
      <FaUserCircle className="text-gray-400 text-6xl" />
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{teacher.name}</h2>
        <p className="text-sm text-gray-600">{teacher.role}</p>
        <p className="text-sm text-gray-500">Birth Date: {teacher.birthDate}</p>
      </div>
    </section>
  );
}
