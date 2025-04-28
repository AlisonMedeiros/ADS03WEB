// routes/todolist.js

import { Router } from 'express';
import todoListController from '../app/controllers/todoListController.js';

const router = Router();

// Rota GET para listar todos
router.get('/todos', todoListController.fetch);

// Rota POST para adicionar, checar ou excluir
router.post('/todos', todoListController.actions);

export default router;
