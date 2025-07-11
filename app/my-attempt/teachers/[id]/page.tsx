import { mockTeacher } from "@/my-attempt-files/data/mockTeacher";
import TeacherDetails from "@/my-attempt-files/components/TeacherDetails";
import ContactCard from "@/my-attempt-files/components/ContactCard";
import PrivateQualifications from "@/my-attempt-files/components/PrivateQualifications";
import GroupQualifications from "@/my-attempt-files/components/GroupQualifications";
import ScheduleGrid from "@/my-attempt-files/components/ScheduleGrid";

export default function TeacherProfilePage({ params }: { params: { id: string } }) {

  const teacher = mockTeacher;

  return (
    <main className="p-4 max-w-6xl mx-auto space-y-6">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeacherDetails teacher={teacher} />
        <ContactCard teacher={teacher} />
      </div>

      {/* Qualifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PrivateQualifications qualifications={teacher.privateQualifications} />
        <GroupQualifications qualifications={teacher.groupQualifications} />
      </div>

      {/* Schedule */}
      <ScheduleGrid schedule={teacher.schedule} />
    </main>
  );
}
