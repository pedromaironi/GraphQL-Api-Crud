/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';

@Resolver((_of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((_returns) => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query((_returns) => User)
  async user(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation((_returns) => User)
  async createUser(@Args('name') name: string, @Args('email') email: string) {
    return this.userService.create(name, email);
  }

  @Mutation((_returns) => User)
  async updateUser(
    @Args('id') id: number,
    @Args('name') name: string,
    @Args('email') email: string,
  ) {
    return this.userService.update(id, name, email);
  }

  @Mutation((_returns) => Boolean)
  async deleteUser(@Args('id') id: number) {
    await this.userService.remove(id);
    return true;
  }
}
