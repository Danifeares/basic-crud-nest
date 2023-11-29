import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const user = this.usersService.create(createUserDto);
    return res.status(HttpStatus.CREATED).json(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string, @Res() res: Response) {

    const user = this.usersService.findOne(email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.')
    }

    return res.json(user)
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto, @Res() res: Response) {

    const user = this.usersService.findOne(email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.')
    }

    this.usersService.update(email, updateUserDto)

    return res.status(HttpStatus.NO_CONTENT).send()
  }

  @Delete(':email')
  remove(@Param('email') email: string, @Res() res: Response) {

    const user = this.usersService.findOne(email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.')
    }

    this.usersService.remove(email);

    return res.status(HttpStatus.NO_CONTENT).send()
  }
}
