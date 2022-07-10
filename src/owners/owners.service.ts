import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownersRepository.create(createOwnerInput);
    return this.ownersRepository.save(newOwner);
  }

  findAll() {
    const owners = this.ownersRepository.find();
    return owners;
  }

  findOne(ownerId: number) {
    const owner = this.ownersRepository.findOneByOrFail({ ownerId });
    return owner;
  }

  // update(id: number, updateOwnerInput: UpdateOwnerInput) {
  //   return `This action updates a #${id} owner`;
  // }

  remove(ownerId: number) {
    return this.ownersRepository.delete(ownerId);
  }
}
