import { type JobStatuses } from "./job";
 
const MQ_PREFIX = "UpstashMQ";
 
export const formatMessageQueueKey = (queueName: string, key: string) => {
  return `${MQ_PREFIX}:${queueName}:${key}`;
};
 
export const convertToJSONString = <T>(
  data: T,
  status: JobStatuses,
): string => {
  return JSON.stringify({
    data,
    status,
  });
};