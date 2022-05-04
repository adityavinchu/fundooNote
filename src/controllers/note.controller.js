import HttpStatus from 'http-status-codes';
import userModel from '../models/user.model';
import * as UserService from '../services/user.service';
import * as noteService from '../services/note.service';


/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
//create a newNote
export const newNote = async (req, res, next) => {
    try {
      const data = await noteService.newNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'New Note Created successfully!!'
      });
    } catch (error) {
      next(error);
    }
  }
  
  //getAllNotes
  export const getAllNotes = async (req, res, next) => {
    try {
      console.log("user data at controller:",req.body);
      const data = await noteService.getAllNotes(req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'All Notes!!'
      });
    } catch (error) {
      next(error);
    }
  }
  
  //getSpecificNote
  export const getNote = async (req, res, next) => {
    try {
      const data = await noteService.getNote(req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Returned a single Note!!'
      });
    } catch (error) {
      next(error);
    }
  }
  
  //Update specific Note
  export const updateNote = async (req, res, next) => {
    try {
      const data = await noteService.updateNote(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Particular Note UPDATED'
      });
    } catch (error) {
      next(error);
    }
  }
  
  
  //delete a Note
  export const DeleteNote=async(req,res,next)=>{
    try {
      const data = await noteService.DeleteNote(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        message: 'Note deleted successfully!!'
      });
    } catch (error) {
      next(error);
    }
  }
  
    // archivedNote
    export const archivedNote = async (req, res, next) => {
      console.log(req.body);
      try {
        const data = await noteService.isArchivedNote(req.params._id, req.body.isArchived);
        res.status(HttpStatus.ACCEPTED).json({
          code: HttpStatus.ACCEPTED,
          data: data,
          message: 'Archived'
        });
      } catch (error) {
        next(error);
      }
    }


      //trash note
  export const isDeleted=async(req,res,next)=>{
    try {
      const data = await noteService.isDeleted(req.params._id,req.body.isDeleted);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'Note is in trash!!'
      });
    } catch (error) {
      next(error);
    }
  }