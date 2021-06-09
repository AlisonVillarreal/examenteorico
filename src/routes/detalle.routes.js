import { Router } from 'express'

const router = Router();

import * as detalleCtr from '../controllers/detalle.controller'

const { checkToken } = require('../auth/token_validation');

/* router.get('/detalle/', checkToken, detalleCtr.readAllDetalle);
router.get('/detalle/:id', checkToken, detalleCtr.readDetalle);
router.delete('/detalle/:id', checkToken, detalleCtr.delDetalle);
router.put('/detalle/:id', checkToken, detalleCtr.updateDetalle);
router.post('/detalle/', checkToken, detalleCtr.createDetalle); */

router.get('/', detalleCtr.readAllDetalle);
router.get('/:id', detalleCtr.readDetalle);
router.delete('/:id', detalleCtr.delDetalle);
router.put('/:id', detalleCtr.updateDetalle);
router.post('/', detalleCtr.createDetalle);


export default router;