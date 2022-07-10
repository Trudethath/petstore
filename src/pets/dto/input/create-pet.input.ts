import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  petId: number;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field(() => Int)
  @IsNotEmpty()
  age: number;

  @Field(() => Int)
  ownerId: number;
}
