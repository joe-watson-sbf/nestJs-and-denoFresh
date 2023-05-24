import { Injectable } from '@nestjs/common';
import { Blog } from 'src/blogs/interface/blog.inteface';

@Injectable()
export class BlogService {
  private readonly blogs: Blog[] = [];

  create(blog: Blog): void {
    this.blogs.push(blog);
  }

  findAll(): Blog[] {
    return this.blogs;
  }

  findOne(id: string): Blog {
    return this.blogs.find((blog) => blog.id === id);
  }

  update(id: string, blog: Blog): Blog {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    this.blogs[index] = blog;
    return blog;
  }

  delete(id: string): Blog[] {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    this.blogs.splice(index, 1);
    return this.blogs;
  }
}
