export interface Qualification {
    name: string;
    rate: number;
}

export interface ScheduleSlot {
    day: string;
    startTime: string;
    endTime: string;
    student?: string;
}

export interface Teacher {
    id: string;
    name: string;
    role: string;
    birthDate: string;
    email: string;
    phone: string;
    address: string;
    privateQualifications: Qualification[];
    groupQualifications: Qualification[];
    schedule: ScheduleSlot[];
}
