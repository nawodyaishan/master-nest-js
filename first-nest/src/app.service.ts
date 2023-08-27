import { Injectable } from "@nestjs/common";

// The @Injectable() decorator marks this class as a service.
@Injectable()
export class AppService {
  /**
   * Returns a "Hello World!" message.
   *
   * @returns A string containing the "Hello World!" message.
   */
  getHello(): string {
    return 'Hello World!';
  }
}
