import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
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
  name: string;
  @Prop({
    type: String,
    required: true,
  })
  email: string;
  @Prop()
  bio: string;
  @Prop()
  avatar: string;
  @Prop()
  birthday: string;
  @Prop({
    type: Number,
    required: true,
  })
  created: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
