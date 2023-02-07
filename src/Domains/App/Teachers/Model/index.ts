import { DataTypes, Model, NOW, Sequelize } from "sequelize";

export default class Teachers extends Model {

    id: number;
    name: string;
    password: string;
    phone: number;
    email: string;
    birthday?: Date | string;
    cep_code: string;
    mail_confirmed?: boolean;
    mail_confirmation_token?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;

    // my_students:

    static define(sequelize: Sequelize): void {
        this.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mobile_phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            birthday: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            cep_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: NOW
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
            {
                sequelize,
                indexes:
                    [
                        {
                            unique: true,
                            fields: ['cpf', 'email']
                        }
                    ],
                tableName: 'students'
            })
    }
}