import Note from '../models/note.model';

export const newNote=async (body)=>{
    const data =await Note.create(body);
    return data;
}

export const getAllNotes=async()=>{
    const data= await Note.find();
    if(data==null){
        throw new Error("No any note for this user");
    }
    else
    return data;
}

export const getNote=async(id)=>{
    console.log("returning particualr note: ",id);
    const data=await Note.findById(id);
    if(data==null){
        throw new Error("note by this id don't exist");
    }
    return data;
}

export const updateNote=async(_id,body)=>{
    console.log("id: ",_id);
    const data=await Note.findByIdAndUpdate(
        {
      _id 
    },
    body,
    {
        new:true
    }
    );
    return data;
}

export const DeleteNote=async(_id)=>{
   await Note.findByIdAndDelete(_id);
   return '';   
}