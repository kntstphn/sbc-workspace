import * as Web3 from '@solana/web3.js'
import base58 from 'bs58';

const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
const base58DecodedPK = base58.decode('3uqv1fQ35rA59YuczKZWHtQYqP2QUARvw91vMtKc9M9JptJMM2w3HLvnySPd2PPGwLSdQRbn8nZJpWs4eZsPt2YN');
const signers = [Web3.Keypair.fromSecretKey(base58DecodedPK)];

const publicKey = new Web3.PublicKey(
    "CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa"
  ); // Public Key Owner


export async function transactionConfirm() {
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: new Web3.PublicKey('CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa'),
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey('HiTkSfvZ16BmjHE73QogQk6L4JytTd4BPzno4vLsN4Ls'), // ProgramId
    });

    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        new Web3.Transaction().add(instruction),
        signers,
    )
    console.log('SIGNATURE', signature)
}