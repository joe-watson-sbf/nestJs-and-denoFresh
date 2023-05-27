import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: User): Promise<User> {
    user.created = Date.now();
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: User): Promise<User> {
    const userFound = this.userModel.findById(id).exec();
    if (!userFound) {
      return null;
    }
    const updateUser = this.userModel.updateOne({ id }, user).exec();
    return updateUser.then();
  }

  async delete(id: string): Promise<string> {
    this.userModel.findByIdAndDelete(id).exec();
    return `User ${id} deleted`;
  }
}
