import { FindOptions } from "sequelize";
import Students from "../Model";
import { FindOneInput } from "../Protocols/Student.protocol";

class StudentRepository {
    async findOne(
        where: FindOneInput,
        options?: FindOptions
    ) {
        const student = await Students.findOne({
            where,
            ...options
        });

        return student;
    }
}

export default new StudentRepository();