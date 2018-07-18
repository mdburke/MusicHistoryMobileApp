import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { DataMapper } from "@aws/dynamodb-data-mapper";
import * as creds from '../../../resources/secrets';
import { ENV } from "@app/env";

/*
  Generated class for the DynamodbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DynamodbProvider {
  private dynamoDB: DynamoDB;
  private mapper: DataMapper;

  constructor(public http: HttpClient) {
    this.dynamoDB = new DynamoDB({
      apiVersion: '2012-08-10',
      region: 'us-east-1',
      accessKeyId: creds['accessKeyId'],
      secretAccessKey: creds['secretAccessKey'],
      endpoint: ENV.dynamo_url
    });
    this.mapper = new DataMapper({
      client: this.dynamoDB
    });
  }

}
