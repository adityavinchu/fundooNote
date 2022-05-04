import { description } from '@hapi/joi/lib/base';
import Note from '../models/note.model';

export const newNote = async (body) => {
    const data = await Note.create(body);
    return data;
}

export const getAllNotes = async (userid) => {
    const data = await Note.find(userid);
    if (data == null) {
        throw new Error("No any note for this user");
    }
    else
        return data;
}

export const getNote = async (userid) => {
    console.log("returning particualr note: ", userid);
    const data = await Note.findById(userid);
    if (data == null) {
        throw new Error("note by this id don't exist");
    }
    return data;
}

export const updateNote = async (id, body) => {
    console.log(body);
    const data = await Note.findByIdAndUpdate({ _id: id, userid: body.userid },
        { title: body.title, description: body.description },
        { new: true }
    );
    return data;
}

export const DeleteNote = async (userid) => {
    await Note.findByIdAndDelete(userid);
    return '';
}

export const isArchivedNote = async (_id) => {
    console.log("id: ", _id);
    //console.log(isArchived);
    const data = await Note.findByIdAndUpdate(

        _id,
        { isArchived: true }

    );
    return data;
}

export const isDeleted = async (_id,) => {
    console.log("id: ", _id);
    console.log(isDeleted);
    const data = await Note.findByIdAndUpdate(

        _id,
        { isDeleted: true }

    );
    return data;
}
