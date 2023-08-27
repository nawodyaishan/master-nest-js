import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

// The @Controller() decorator marks this class as a controller.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    // The constructor receives an instance of AppService through dependency injection.
  }

  // The @Get() decorator specifies that this method should handle GET requests.
  @Get()
  getHello(): string {
    // Inside this method, we call the getHello() method of the injected AppService.
    // The return value of getHello() will be the response of this API endpoint.
    console.log('🚀 Called Hello World');
    return this.appService.getHello();
  }
}
