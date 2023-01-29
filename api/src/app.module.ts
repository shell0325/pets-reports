import { Module } from '@nestjs/common';
import { AdaptorApiModule } from './adaptor/primary/api/adaptorApiModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AdaptorApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
