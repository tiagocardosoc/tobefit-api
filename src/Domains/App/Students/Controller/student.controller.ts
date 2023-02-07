import { Request, Response } from "express";
import studentService from "../Service/student.service";

class StudentController {
    async getUserByCPF(req: Request, res: Response): Promise<Response> {
        try {
            const { cpf } = req.params;

            const student = await studentService.findOne({ cpf });

            if (!student) throw new Error('Usuário não cadastrado.');

            return res.status(201).json(student);
        } catch (error) {
            return res.status(500).json({ Error: error.message })
        }
    }
}

export default new StudentController();
