import { Module } from '@nestjs/common';
import { userResolver } from './user.resolver';

@Module({
  providers: [userResolver],
})
export class UserModule {}
