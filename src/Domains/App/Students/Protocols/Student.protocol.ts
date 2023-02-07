import Students from "../Model"

export type FindOneInput = {
    id?: number,
    email?: string,
    cpf?: string,
};
export type FindOneResponse = Students;