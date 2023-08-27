import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

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

  /**
   * Get a message based on the provided dynamic ID parameter.
   *
   * @param id - The dynamic ID parameter extracted from the route.
   * @returns A string containing the message.
   */
  @Get('/message:id') // Define the dynamic parameter using :id
  getMessage(@Param('id') id: string) {
    console.log('🚀 Called getMessage - id =', id);
    return this.appService.getString(id);
  }
}