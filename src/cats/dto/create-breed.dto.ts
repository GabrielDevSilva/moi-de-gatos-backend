import { IsNotEmpty } from 'class-validator';

export class CreateBreedDTO {
  @IsNotEmpty()
  breed: string;
}
