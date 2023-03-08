import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCatDto {
  id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  breed: string;
}
