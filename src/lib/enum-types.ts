import { registerEnumType } from '@nestjs/graphql';

export enum Status {
  CLOSED,
  IN_PROGRESS,
}

registerEnumType(Status, {
  name: 'Status',
  description: 'The status of the project, it will be CLOSED or IN_PROGRESS',
});
