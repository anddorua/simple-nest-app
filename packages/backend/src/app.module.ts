import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigInterface } from './config/database/config.interface';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    ConfigModule.forRoot({ load: [databaseConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<{mysql: ConfigInterface}>) => ({
        type: 'mysql',
        host: configService.get('mysql.host', {infer: true}),
        port: configService.get('mysql.port', {infer: true}),
        username: configService.get('mysql.username', {infer: true}),
        password: configService.get('mysql.password', {infer: true}),
        database: configService.get('mysql.database', {infer: true}),
        autoLoadEntities: true,
      }),
      inject: [ConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
