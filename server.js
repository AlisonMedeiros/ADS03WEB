import express from 'express';
import path from "path";
import chalk from 'chalk';

import webRoutes from './routes/web.js';
import constants from './bootstrap/constants.js';
import "./bootstrap/app.js"


/** Init Router */
const app = express();
const port = process.env.PORT;

/** Init Static flies in public */
app.use(express.static(path.join(constants.DIR, 'public')));

/** Init Routes */
app.use('/', webRoutes);

/** Run server */
app.listen(port, () => {
    console.log(chalk.green(`Servidor rodando na porta ${port}`));
});

