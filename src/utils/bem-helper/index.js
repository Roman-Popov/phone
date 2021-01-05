// @flow
import { BemHelper } from './bem-helper';

export const createBlock = (block: string) => new BemHelper(block);
