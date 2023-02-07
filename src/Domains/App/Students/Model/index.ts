import { DataTypes, Model, NOW, Sequelize } from "sequelize";

export default class Students extends Model {

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

    // personal_responsable:

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
            mail_confirmed: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: null
            },
            mail_confirmation_token: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
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