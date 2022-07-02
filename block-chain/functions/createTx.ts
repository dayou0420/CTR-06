import { Input } from "../types/input";
import { Output } from "../types/output";
import { Tx } from "../types/tx";

export function createTx(): Tx {
    const txId = crypto.randomUUID();
    const now = new Date().toISOString();

    const inputs: Input[] = [
        {
            time: now,
            from: 'TaroWallet',
            signature: 'Test'
        }
    ];

    const outputs: Output[] = [
        {
            to: 'HanakoWallet',
            amount: 20,
            fee: 3
        }
    ];

    const tx: Tx = {
        id: txId,
        inputs: inputs,
        outputs: outputs
    };

    return tx;
}