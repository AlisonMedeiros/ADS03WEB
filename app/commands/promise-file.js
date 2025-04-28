import { promises as fs } from 'fs';
import { resolve } from 'path';
import constants from '../../bootstrap/constants.js';

const filePath = resolve(constants.DIR, 'storage/arquivo.txt');
console.log(fs.readFile(filePath, 'utf8'));



(async (file) => {
    try {
        const filePath = resolve(constants.DIR, "storage", file);
        const data = await fs.readFile(filePath, 'utf8');
        console.log('Conteúdo do arquivo:\n', data);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }
})('arquivo.txt');