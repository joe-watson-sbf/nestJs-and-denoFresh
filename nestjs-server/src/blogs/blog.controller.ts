import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { BlogDto } from 'src/blogs/dto/create-blog.dto';
import { Blog } from 'src/blogs/interface/blog.inteface';
import { BlogService } from 'src/blogs/blog.service';

/* @Controller({ host: 'admin.example.com' }) */
@Controller('api/blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get()
  async findAll(@Req() resquest: Request): Promise<Blog[]> {
    const { url, method } = resquest;
    console.log(method, url);
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): object {
    return {
      id,
      title: `Blog #${id}`,
      content: `content #${id}`,
    };
  }

  @Post()
  async create(@Body() createBlogDto: BlogDto): Promise<Blog> {
    // generate random date
    createBlogDto.created = Date.now();
    createBlogDto.id = Math.random().toString(36);
    return this.blogService.create(createBlogDto);
  }
}
