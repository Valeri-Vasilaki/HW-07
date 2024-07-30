require('dotenv').config();

import {Express, static as exstatic} from "express";
import {Connection} from "mysql2/promise";
import {initDataBase} from "./Server/services/db";
import {initServer} from "./Server/services/server";
import ShopAPI from "./Shop.API";
import ShopAdmin from "./Shop.Admin";
import path from "path";

export let server: Express;
export let connection: Connection;

async function launchApplication() {
    server = initServer();
    connection = await initDataBase();
    initRouter();
}

function initRouter() {
    const shopApi = ShopAPI(connection);
    const shopAdmin = ShopAdmin();
    server.use("/api", shopApi);
    server.use("/admin", shopAdmin);
    server.use("/", exstatic(path.join(__dirname, './shop.client/build')));
}

launchApplication();