import { Tx } from './tx';
import { Validator } from './validator';

export type Block = {
    index: number;
    time: string;
    prev_hash: string;
    hash: string;
    tx: Tx;
    validator: Validator;
};
