import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudnetIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentIntoDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentIntoDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudnetIntoDB,
  getAllStudentIntoDB,
  getSingleStudentIntoDB,
};
