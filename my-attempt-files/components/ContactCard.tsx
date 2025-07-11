"use client";

import { Teacher } from "@/my-attempt-files/types/teacher";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

interface Props {
  teacher: Teacher;
}

export default function ContactCard({ teacher }: Props) {
  return (
    <section className="bg-white p-5 rounded-2xl shadow space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">Contact Info</h3>
      <div className="flex items-start gap-3 text-sm text-gray-600">
        <MdEmail className="text-xl mt-0.5 text-blue-500" />
        <span>{teacher.email}</span>
      </div>
      <div className="flex items-start gap-3 text-sm text-gray-600">
        <MdPhone className="text-xl mt-0.5 text-green-500" />
        <span>{teacher.phone}</span>
      </div>
      <div className="flex items-start gap-3 text-sm text-gray-600">
        <MdLocationOn className="text-xl mt-0.5 text-red-500" />
        <span>{teacher.address}</span>
      </div>
    </section>
  );
}
