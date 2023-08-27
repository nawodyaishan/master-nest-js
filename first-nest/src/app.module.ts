import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
    // The `imports` array is used to import other modules.
    // Leave empty for this example as there are no additional modules being imported.
    imports: [],

    // The `controllers` array specifies the controllers to be registered within this module.
    // Controllers handle incoming HTTP requests and define the API endpoints.
    controllers: [AppController],

    // The `providers` array defines the services that can be injected into other components.
    // Services encapsulate the business logic of the application.
    providers: [AppService],
})
export class AppModule {
}
