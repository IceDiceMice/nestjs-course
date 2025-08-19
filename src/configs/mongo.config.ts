import { TypegooseModuleOptions } from '@m8a/nestjs-typegoose';
import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (
  configService: ConfigService,
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
  };
};

const getMongoString = (configService: ConfigService) => {
  const host =
    configService.get('NODE_ENV') === 'development' ? 'localhost' : 'mongo';

  return (
    'mongodb://' +
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    host +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTHDATABASE')
  );
};
