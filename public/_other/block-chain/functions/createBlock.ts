// import { Block } from '../types/block.ts'
// import { Tx } from '../types/tx.ts';
// import { Validator } from '../types/validator.ts';
// import { calcBlockHash } from './calcBlockHash.ts';

// export async function createBlock(
//         prevBlock: Block,
//         tx: Tx,
//         validator: Validator
//     ): Promise<Block> {
//         const time = new Date().toString();
//         const index = prevBlock.index + 1;
//         const hash = await calcBlockHash(
//             index,
//             time,
//             prevBlock.hash,
//             tx,
//             validator
//         );

//     const newBloack: Block = {
//         index: index,
//         time: time,
//         prev_hash: prevBlock.hash,
//         hash: hash,
//         tx: tx,
//         validator: validator
//     };

//     return newBloack;
// }
