import { Topic } from '../types';
import english from './english';
import math from './math';
import urdu from './urdu';
import { GK_TOPICS } from './gk';

export { GK_TOPICS };

const ALL_TOPICS: Topic[] = [english, math, urdu, ...GK_TOPICS];

export function getTopic(id: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.id === id);
}
