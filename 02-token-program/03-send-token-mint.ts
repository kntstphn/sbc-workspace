import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
export async function sendTokenMints(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('3uqv1fQ35rA59YuczKZWHtQYqP2QUARvw91vMtKc9M9JptJMM2w3HLvnySPd2PPGwLSdQRbn8nZJpWs4eZsPt2YN');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('6BoFEHTucsKcJXHBteGGFWbYTp2bVYh9EEvMVtXX98oi'), //mint  (created token mint on step 1)
        new Web3.PublicKey('ByKo8tBViLoJ3Mp49SFAM4jThQXzvDQB3G8GeKRqhoXu'), //owner or ang sendan sa token (created in step 2)
        new Web3.PublicKey('CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa'), //authority (the owner or the authority set on step 1)
        1000000000, //
    )
    console.log('mint Token ', mintToken)
    
}