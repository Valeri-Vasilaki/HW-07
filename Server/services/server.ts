import express, {Express} from "express";

const host = process.env.LOCAL_PATH;
const port = Number(process.env.LOCAL_PORT);

export function initServer(): Express {
    const app = express();
    const jsonMiddleware = express.json();
    app.use(jsonMiddleware);
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
        next();
    });
    app.listen(port, host, () => {
        console.log(`Server running on port ${port}`);
    });
    return app;
}