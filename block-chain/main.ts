import { createTx } from './functions/createTx.ts';
import { pickWinner } from './functions/pickWinner.ts'
import { Block } from './types/block.ts';
import { createBlock } from './functions/createBlock.ts';

main();

async function main() {
    const tx = createTx();
    const validator = pickWinner();
    const file = './db/blockchain.json';
    let text = await Deno.readTextFile(file);
    const blocks: Block[] = JSON.parse(text);
    const prevBlock = blocks[blocks.length - 1];

    const newBlock = await createBlock(
        prevBlock,
        tx,
        validator
    );

    blocks.push(newBlock);
    text = JSON.stringify(blocks, null, 2);
    const opt = { append: false, create: false };
    await Deno.writeTextFile(file, text, opt);
}
