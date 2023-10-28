import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';

export async function transferSols() {
    const decoded = base58.decode('3uqv1fQ35rA59YuczKZWHtQYqP2QUARvw91vMtKc9M9JptJMM2w3HLvnySPd2PPGwLSdQRbn8nZJpWs4eZsPt2YN');
    const keyPair = Web3.Keypair.fromSecretKey(decoded);
    
    const publicKeyFrom = new Web3.PublicKey('CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa');
    const publicKeyTo = new Web3.PublicKey('C4EVHxyPmfMa7jkiEpSe9nDNK9Sy1cd8weyQJebgyfMB');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });

    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature);
}