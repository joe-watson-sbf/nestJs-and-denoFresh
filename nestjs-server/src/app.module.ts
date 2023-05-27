import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blogs/blogs.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BlogModule,
    UserModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('api/blogs');
  }
}
