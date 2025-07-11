import { Qualification } from "@/my-attempt-files/types/teacher";
import QualificationsTable from "./QualificationsTable";

export default function PrivateQualifications({ qualifications }: { qualifications: Qualification[] }) {
  return <QualificationsTable title="Private Qualifications" qualifications={qualifications} />;
}
