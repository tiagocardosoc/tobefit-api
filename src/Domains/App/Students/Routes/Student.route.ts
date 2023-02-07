import { Router } from "express";
import StudentController from "../Controller/student.controller";

const route = Router();

route.get(
    "/student/search-by-cpf",
    StudentController.getUserByCPF
);