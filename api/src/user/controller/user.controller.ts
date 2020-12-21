import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body()user: User): Observable<User> {
        return this.userService.create(user);
    }

    findOne() {

    }

    findAll() {

    }

    deleteOne() {

    }

    udpateOne() {

    }
}
