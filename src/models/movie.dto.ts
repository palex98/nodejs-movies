import { IsNotEmpty, IsDateString, IsEnum } from 'class-validator';
import { Genre } from './movie.model';

export class MovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsDateString()
  release: Date;

  @IsNotEmpty()
  director: string;

  @IsNotEmpty()
  @IsEnum(Genre)
  genre: Genre;
}
