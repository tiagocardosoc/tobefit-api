import { databaseConfig } from '../../Config/MySql';
import { Models } from '../../Domains/models';
import {Sequelize} from 'sequelize';

class Database {
    private mysql: Sequelize;

    get instance(): Sequelize {
        return this.mysql;
    }

    async start() {
        try {
            this.setupMySQLConnection();
            await this.testMySQLConnection();
            this.configMySQLModels();
			await this.syncMySQLWithModels()
        } catch(error) {
            return error;
        }
    }

    async stop(): Promise<void> {
        await this.mysql.close();
    }

    private setupMySQLConnection() {
        try {
            this.mysql = new Sequelize(
                databaseConfig.database,
                databaseConfig.user,
                databaseConfig.password,
                databaseConfig.options
            )
        } catch(error) {
            return error;
        }
    }

    private async testMySQLConnection() {
        try {
            await this.mysql.authenticate();
            console.log(`Connected to MySQL... [${databaseConfig.options.host}:${databaseConfig.options.port}]`)
        } catch(error) {
            return error;
        }
    }

    private configMySQLModels() {
        Models.forEach((model: any) => {
            model.import?.(this.mysql.models);
        });

        Models.forEach(model => {
            model.define(this.mysql)
        })

        Models.forEach((model: any) => {
            model.associate?.(this.mysql.models)
        })
    }

    private async syncMySQLWithModels() {
        console.log('===== Initializing synchronization to database... ======');
        console.time("Time to sync database!!!");
        try {
            await this.mysql.sync({ alter: true, force: false });

            console.log('SUCCESS synchronization process!')
        } catch(error) {
            console.log(error);
            console.log('Synchronization to database FAILED!')
        }
    }

}

export default Database;