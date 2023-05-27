import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dtos/user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.service.findAll();
  }

  @Post()
  async create(@Body() createUserDto: UserDto): Promise<UserDto> {
    createUserDto.created = Date.now();
    createUserDto.id = Date.now() + Math.random().toString(36);
    return this.service.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    return this.service.findOne(id);
  }
}
