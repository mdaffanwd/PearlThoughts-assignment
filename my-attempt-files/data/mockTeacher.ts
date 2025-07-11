import { Teacher } from "@/my-attempt-files/types/teacher";

export const mockTeacher: Teacher = {
  id: "1",
  name: "Alynia Allan",
  role: "Teacher",
  birthDate: "1990-05-15",
  email: "alyniaallan@example.com",
  phone: "+1 416 648 9057",
  address: "56 Oswald De Santos Cir, North York, Ontario, Canada",
  privateQualifications: [
    { name: "Vocal Contemporary", rate: 28 },
    { name: "Vocal Core", rate: 28 },
    { name: "Vocal Plus", rate: 28 },
    { name: "Instrument", rate: 28 },
  ],
  groupQualifications: [],
  schedule: [
    { day: "Tuesday", startTime: "2:00 PM", endTime: "3:00 PM", student: "Jane Doe" },
    { day: "Thursday", startTime: "2:00 PM", endTime: "3:30 PM", student: "John Smith" },
  ],
};
