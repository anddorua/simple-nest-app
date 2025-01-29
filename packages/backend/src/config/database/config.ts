import { registerAs } from '@nestjs/config';
import { ConfigInterface } from './config.interface';

export default registerAs(
  'mysql',
  () =>
    ({
      host: process.env.MYSQL_HOST!,
      port: +(process.env.MYSQL_PORT ?? 3306),
      username: process.env.MYSQL_USER!,
      password: process.env.MYSQL_PASSWORD!,
      database: process.env.MYSQL_DATABASE!,
    }) satisfies ConfigInterface,
);
