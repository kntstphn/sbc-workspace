// @solana/web3.js

import * as Web3 from '@solana/web3.js';

export async function readBalance() {
    const publicKey = new Web3.PublicKey('CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}