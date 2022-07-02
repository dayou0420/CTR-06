import { Input } from "./input";
import { Output } from "./output";

export type Tx = {
    id: string;
    inputs: Input[];
    outputs: Output[];
};
