import { Schema, model, connect } from 'mongoose';


export type Guardian =
    {
        fatherName: string,
        fatherOccupetion: string,
        fatherContactNo: string
        motherName: string,
        motherOccupetion: string,
        motherContactNo: string
    }

export type UserName = {
    fristName: string,
    middleName: string,
    lastName: string
};


export type LocalGuardian = {
    name: string,
    occupation: string,
    contactNo: string,
    address: string
}

export type Student = {
    id: string,
    name: UserName,
    gender: "male" | "female",
    dateOfBirth?: string,
    email: string;
    contactNo: string,
    emargencyContactNo: string,
    bloodGroup?: "A+ " | "B + " | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string,
    permanentAddress: string,
    guardian: Guardian,
    localGuardian: LocalGuardian,
    profileImg?: string,
    isActive: 'active' | "block"
}