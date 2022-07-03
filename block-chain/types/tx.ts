import { Input } from './input.ts';
import { Output } from './output.ts';

export type Tx = {
    id: string;
    inputs: Input[];
    outputs: Output[];
};
