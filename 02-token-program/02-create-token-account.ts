import base58 from "bs58";
import * as Web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));

const publicKey = new Web3.PublicKey(
  "CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa"
); // Public Key Owner
const decoded = base58.decode(
  "3uqv1fQ35rA59YuczKZWHtQYqP2QUARvw91vMtKc9M9JptJMM2w3HLvnySPd2PPGwLSdQRbn8nZJpWs4eZsPt2YN"
);  // Private Key Owner
const keyPair = Web3.Keypair.fromSecretKey(decoded);
const tokenMint = "Ey89QaYz685AN9JjoHZE4GPMKeC5224GDhi2mZdu2DQW"; // Token Mint from step 1

export async function createTokenAccount() {
  const tokenAccount = await token.createAccount(
    connection,
    keyPair, // private key
    new Web3.PublicKey(tokenMint), // token key
    publicKey // owner public key
  );
  console.log(tokenAccount.toBase58());
}
