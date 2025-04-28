import { Router } from 'express';
import express from 'express';
import { join } from 'path';
import { readdir } from 'fs';
import promise01 from '../app/controllers/promise-01.js';
import constants from '../bootstrap/constants.js';
import todolistRoutes from './todo-list.js';

const router = Router();

router.use(express.json());

// Rota para listar arquivos na pasta 'public'
router.get('/', (req, res) => {
    const dirPath = join(constants.DIR, 'public');

    readdir(dirPath, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao ler o diretório');
        }

        const fileList = files.map(file => {
            return `<li><a href="/${file}">${file}</a></li>`;
        }).join('');

        res.send(`
            <html>
                <head><title>Lista de Arquivos</title></head>
                <body>
                    <h2>Lista de Arquivos</h2>
                    <ul>${fileList}</ul>
                </body>
            </html>
        `);
    });
});

// todolist routes
router.use('/', todolistRoutes);

// Rota para executar a função promise01
router.get('/promise', promise01);

// Rota para servir os arquivos
router.get('/:file', (req, res) => {
    const filePath = join(constants.DIR, 'public', req.params.file);
    res.sendFile(filePath);
});

export default router;
