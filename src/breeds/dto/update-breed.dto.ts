import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBreedDto {
  id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  breed: string;
}
