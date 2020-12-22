import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './service/auth.service';

@Module({
    imports: [JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService:ConfigService) => ({
            secret: configService.get('JWT_SECRET'),
            signOptions: {
                expiresIn: 100
            }  
        })
    })],
    providers: [AuthService]
})
export class AuthModule {}
