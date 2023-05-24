import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;
@Schema()
export class Blog {
  @Prop({
    type: String,
    required: true,
    index: true,
    unique: true,
  })
  id: string;
  @Prop({
    type: String,
    required: true,
  })
  author: string;
  @Prop()
  avatar: string | null;
  @Prop({
    type: String,
    required: true,
  })
  title: string;
  @Prop({
    type: String,
    required: true,
  })
  content: string;
  @Prop({
    type: Number,
    required: true,
  })
  created: number;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
