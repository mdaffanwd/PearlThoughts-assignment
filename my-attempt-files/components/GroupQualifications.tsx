import { Qualification } from "@/my-attempt-files/types/teacher";
import QualificationsTable from "./QualificationsTable";

export default function GroupQualifications({ qualifications }: { qualifications: Qualification[] }) {
  return <QualificationsTable title="Group Qualifications" qualifications={qualifications} />;
}
