import Database from "./Database";
import Server from "./Server";

export class Setup {
    server: Server;
    database: Database;

    constructor() {
        this.server = new Server();
        this.database = new Database();
    }

    async boot() {
        console.log(`tobefit is booting...`)

        await this.database.start();
        this.server.start();
    }
}