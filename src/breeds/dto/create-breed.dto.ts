import { IsAlpha, IsNotEmpty, IsString } from 'class-validator';

export class CreateBreedDTO {
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  breed: string;
}
