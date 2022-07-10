import { CreatePetInput } from './create-pet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {
  @Field({ nullable: true })
  @IsNotEmpty()
  name: string;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  age: number;
}
