import { Input } from '../types/input.ts';
import { Output } from '../types/output.ts';
import { Tx } from '../types/tx.ts';

export function createTx(): Tx {
    const txId = crypto.randomUUID();
    const now = new Date().toISOString();

    const inputs: Input[] = [
        {
            time: now,
            from: 'TaroWallet',
            signature: 'Taro. I confirm to send coin to Hanako.'
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