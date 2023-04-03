import {
  IsAlpha,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
} from 'class-validator';

export class CreateCatDTO {
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsNotEmptyObject()
  breed: object;
}
