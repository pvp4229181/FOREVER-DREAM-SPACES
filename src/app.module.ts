import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SiteModule } from './site/site.module.js';
import { ContactModule } from './contact/contact.module.js';

// Set SKIP_DB=true to preview the site's pages without a MongoDB connection
// (the contact form will not persist leads while skipped).
const skipDb = process.env.SKIP_DB === 'true';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...(skipDb
      ? []
      : [
          MongooseModule.forRoot(
            process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/foreverdreamspaces',
            {
              serverSelectionTimeoutMS: 5000,
              retryAttempts: 3,
              retryDelay: 2000,
            },
          ),
        ]),
    SiteModule,
    ...(skipDb ? [] : [ContactModule]),
  ],
})
export class AppModule {}
