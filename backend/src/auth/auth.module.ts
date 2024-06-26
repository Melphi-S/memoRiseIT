import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { HashModule } from '../hash/hash.module';
import { JwtConfigService } from '../config/jwt-cofig.factory';
import { VocabulariesModule } from '../vocabularies/vocabularies.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    HashModule,
    VocabulariesModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
