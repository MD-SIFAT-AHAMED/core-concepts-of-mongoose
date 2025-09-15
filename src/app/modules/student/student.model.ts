import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, Student, UserName } from './student.interface';
import { toUSVString } from 'util';

const UserNameSchema = new Schema<UserName>({
    fristName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    }
})


const GuardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupetion: {
        type: String,
        required: true
    },
    fatherContactNo: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    motherOccupetion: {
        type: String,
        required: true
    },
    motherContactNo: {
        type: String,
        required: true
    }
})


const LocalGuardianSchema = new Schema<LocalGuardian>({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
})

const studentSchema = new Schema<Student>({
    id: { type: String },
    name: UserNameSchema,
    gender: ["male", "female"], // Eita mongosse a enum bola hoy mane option kaj re array er bitor likte hoy
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emargencyContactNo: { type: String, required: true },
    bloodGroup: ["A+", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: GuardianSchema,
    localGuardian: LocalGuardianSchema,
    profileImg: { type: String, required: true },
    isActive: ['active', 'block']
})

// Create Student Model

const Student = model<Student>('Studnet', studentSchema);