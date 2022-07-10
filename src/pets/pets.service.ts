import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/input/create-pet.input';
import { UpdatePetInput } from './dto/input/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private ownersService: OwnersService,
  ) {}

  create(createPetInput: CreatePetInput) {
    const newPet = this.petRepository.create(createPetInput);
    return this.petRepository.save(newPet);
  }

  findAll() {
    const pets = this.petRepository.find();
    return pets;
  }

  findOne(petId: number) {
    const pet = this.petRepository.findOneByOrFail({ petId });
    return pet;
  }

  // update(data) {
  //   this.petRepository.update<Pet>(data, { where: { id: data.petId } });
  // }

  remove(petId: number) {
    return this.petRepository.delete(petId);
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId);
  }
}
