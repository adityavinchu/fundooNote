import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';


const router = express.Router();

router.post('',userAuth,noteController.newNote);
router.get('',userAuth,noteController.getAllNotes);
router.get('/:_id',userAuth,noteController.getNote);
router.put('/:_id',userAuth,noteController.updateNote);
router.delete('/:_id',userAuth,noteController.DeleteNote);

router.put('/isArchive/:_id',noteController.archivedNote);
router.put('/istrash/:_id',noteController.isDeleted);

export default router;
