import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatDTO {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  @IsNotEmpty()
  breed: string;
}
