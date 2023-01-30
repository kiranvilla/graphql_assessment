import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { users } from './user.data';

@Resolver('User')
export class userResolver {
  @Query('users')
  getAllUsers() {
    return users;
  }

  @Query('user')
  getUserByUsername(@Args('username') username: string) {
    return users.find((user) => user.username === username);
  }

  @Mutation('createUser')
  createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('username') username: string,
  ) {
    users.push({
      id: users.length + 1,
      name,
      email,
      username,
    });
    return users.find((user) => user.username === username);
  }

  @Mutation('updateUserEmail')
  updateUserEmail(
    @Args('username') username: string,
    @Args('email') email: string,
  ) {
    const index = users.findIndex((user) => user.username === username);
    const user = users[index];
    user.email = email;
    user[index] = user;
    return user;
  }
}
