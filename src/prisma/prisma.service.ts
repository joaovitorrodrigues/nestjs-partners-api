import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // private _spot: any;
  // public get spot(): any {
  //   return this._spot;
  // }
  // public set spot(value: any) {
  //   this._spot = value;
  // }
  async onModuleInit() {
    await this.$connect();
  }
}
