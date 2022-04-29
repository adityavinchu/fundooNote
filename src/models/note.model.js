import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    color:{
      type:String,
    },
    isArchived:{
      type:Boolean,
    },
    isDeleted:{
      type:Boolean,
    },
    userid: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('note', noteSchema);
