import { Module } from '@nestjs/common';
import { ProyectsModule } from './proyects/proyects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';

@Module({
  imports: [ProyectsModule, AuthModule, UsersModule, TasksModule],
  controllers: [HelloController],
  providers: [HelloService],
})
export class AppModule {}
