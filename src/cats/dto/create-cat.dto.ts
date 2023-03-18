import { IsNotEmpty, IsNotEmptyObject, IsNumber } from 'class-validator';

export class CreateCatDTO {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsNotEmptyObject()
  breed: object;
}
