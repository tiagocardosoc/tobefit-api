import { FindOptions } from "sequelize";
import { FindOneInput, FindOneResponse } from "../Protocols/Student.protocol";
import StudentRepository from "../Repository/Student.repository";

class StudentService {
    async findOne(where: FindOneInput, options?: FindOptions): Promise<FindOneResponse> {
        return await StudentRepository.findOne(where, options);
    }


}

export default new StudentService()