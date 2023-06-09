import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    challengeId: {
      type: Schema.Types.ObjectId,
      ref: 'Challenge',
      required: true
    },
    content: {
      type: String, 
      required: true
    },
    title: {
      type: String, 
      required: false,
      default: ""
    },
  },
  {
    timestamps: true,    
  }
);

const commentModel = model('ChallengeComment', commentSchema);
export { commentModel };