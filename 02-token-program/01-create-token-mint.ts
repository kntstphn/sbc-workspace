import base58 from "bs58";
import * as Web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

const connection = new Web3.Connection(
  Web3.clusterApiUrl("devnet"),
  "confirmed"
);

const publicKey = new Web3.PublicKey(
  "CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa"
); // public key for the owner to be sent

const decoded = base58.decode(
  "3uqv1fQ35rA59YuczKZWHtQYqP2QUARvw91vMtKc9M9JptJMM2w3HLvnySPd2PPGwLSdQRbn8nZJpWs4eZsPt2YN"
); // Private Key of the Owner
const keyPair = Web3.Keypair.fromSecretKey(decoded);

export async function createTokenMint() {
  const tokenMint = await token.createMint(
    connection,
    keyPair,
    publicKey,
    publicKey,
    9
  );
  console.log(tokenMint.toBase58());
}
