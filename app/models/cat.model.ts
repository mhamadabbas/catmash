import { Document, model, Schema } from 'mongoose';

const CAT_SCHEMA = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    required: true,
    default: 0,
  },
});

export interface ICat extends Document {
  name?: string;
  imgUrl?: string;
  vote?: number;
}

export const Cat = model<ICat>('Cat', CAT_SCHEMA);
