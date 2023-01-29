import { Module } from '@nestjs/common';
import { AdaptorApiModule } from './adaptor/primary/api/adaptorApiModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdaptorAuthModule } from './adaptor/primary/authentication/authModule';

@Module({
  imports: [
    AdaptorApiModule,
    AdaptorAuthModule,
    ConfigModule.forRoot({
      envFilePath: '../.env',
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
