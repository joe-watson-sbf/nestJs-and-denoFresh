import { Injectable } from '@nestjs/common';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<BlogDocument>,
  ) {}

  async create(blog: BlogDto): Promise<Blog> {
    blog.created = Date.now();
    const createdBlog = new this.blogModel(blog);
    return createdBlog.save();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async findOne(id: string): Promise<Blog> {
    return this.blogModel.findById(id).exec();
  }

  async update(id: string, blog: Blog): Promise<Blog> {
    const blogFound = this.blogModel.findById(id).exec();
    if (!blogFound) {
      return null;
    }
    const updateBlog = this.blogModel.updateOne({ id }, blog).exec();

    return updateBlog.then();
  }

  delete(id: string): string {
    this.blogModel.deleteOne({ id }).exec();
    return `Blog ${id} deleted`;
  }
}
