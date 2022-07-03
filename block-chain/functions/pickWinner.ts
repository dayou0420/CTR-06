import { Validator } from '../types/validator.ts';

export function pickWinner(): Validator {
    const v1: Validator = {
        addr: 'YamadaWallet',
        signature: 'Check TX.',
        token: 1
    };

    const v2: Validator = {
        addr: 'TanakaWallet',
        signature: 'Check TX.',
        token: 2
    };

    const v3: Validator = {
        addr: 'SaitoWallet',
        signature: 'Check TX.',
        token: 3
    };

    const v4: Validator = {
        addr: 'WatanabeWallet',
        signature: 'Check TX.',
        token: 4
    };

    const candidates = [v1, v2, v2, v3, v3, v3, v4, v4, v4, v4];

    const randomIndex = Math.floor(Math.random() * candidates.length);
    const winner = candidates[randomIndex];

    console.log(`Winner: ${winner.addr}`);

    return winner;

}