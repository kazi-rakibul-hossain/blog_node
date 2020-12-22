import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable } from 'rxjs';

@Injectable()
export class AuthService {
    
    constructor(private readonly jwtService: JwtService) {}

    generateJWT(user: Object): Observable<string> {
        return from(this.jwtService.signAsync({user}));
    }

    hashPassword(): Observable<string> {

    }

    comparePassword(): Observable<any> {

    }
}
