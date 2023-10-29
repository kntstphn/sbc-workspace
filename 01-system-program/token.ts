import { createMint } from '@solana/spl-token';
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const web3 = require('@solana/web3.js');
const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

export async function fungibleToken() {
    const payer = Keypair.generate();
    const mintAuthority = Keypair.generate();
    const freezeAuthority = Keypair.generate();
    
    const connection = new Connection(
      clusterApiUrl('devnet'),
      'confirmed'
    );
    
    const mint = await createMint(
      connection,
      payer,
      mintAuthority.publicKey,
      freezeAuthority.publicKey,
      9 // We are using 9 to match the CLI decimal default exactly
    );
    
    console.log(mint.toBase58());
}
