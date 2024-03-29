import { randomUUID } from "crypto";
import { Redis } from "ioredis";

type OwnerQueue = {
  redis: Redis;
  queueName: string;
};
export type JobStatuses =
  | "created"
  | "waiting"
  | "active"
  | "succeeded"
  | "failed";
 
export class Job<T> {
  id: string;
  status: JobStatuses;
  config: OwnerQueue;
  data: T;
 
  constructor(ownerConfig: OwnerQueue, data: T, jobId = randomUUID()) {
    this.id = jobId;
    this.status = "created";
    this.data = data;
    this.config = ownerConfig;
  }
}