import { Tx } from './tx.ts';
import { Validator } from './validator.ts';

export type Block = {
    index: number;
    time: string;
    prev_hash: string;
    hash: string;
    tx: Tx;
    validator: Validator;
};
