import { Router } from 'express'

const router = Router();

import * as matriculaCtr from '../controllers/matricula.controller'

const { checkToken } = require('../auth/token_validation');

/* router.get('/', matriculaCtr.readAllMatricula);
router.get('/:id', matriculaCtr.readMatricula);
router.delete('/:id', matriculaCtr.delMatricula);
router.put('/:id', matriculaCtr.updateMatricula);
router.post('/', matriculaCtr.createMatricula); */

router.get('/', matriculaCtr.readAllMatricula);
router.get('/:id', matriculaCtr.readMatricula);
router.delete('/:id', matriculaCtr.delMatricula);
router.put('/:id', matriculaCtr.updateMatricula);
router.post('/', matriculaCtr.createMatricula);

export default router;