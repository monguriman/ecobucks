import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    challenge_id: {
      type: Schema.Types.ObjectId,
      ref: 'Chellenge',
      required: true
    },
    content: {
      type: String, 
      required: true
    },
  },
  {
    timestamps: true,    
  }
);

const commentModel = model('Comment', commentSchema);
export { commentModel };