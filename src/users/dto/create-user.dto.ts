import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O campo nome é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'O campo email é obrigatório' })
  @IsEmail({}, { message: 'O email precisa ter um formato válido' })
  email: string;
}
