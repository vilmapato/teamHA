import { StreamClient } from '@apibara/protocol'
import { StarkNetCursor, Filter, FieldElement, v1alpha2 as starknet } from '@apibara/starknet'
import { hash } from 'starknet'
// import { finality, DataFinality  } from "@apibara/indexer";
// import { Config, finality, DataFinality } from "http://esm.run/@apibara/indexer";

const DataFinality = {
    DATA_STATUS_UNKNOWN: 0,
    DATA_STATUS_PENDING: 1,
    DATA_STATUS_ACCEPTED: 2,
    DATA_STATUS_FINALIZED: 3,
  }

// Read token from environment
const AUTH_TOKEN = "dna_xyz"

// Use token when streaming data
const client = new StreamClient({
url: 'mainnet.starknet.a5a.ch',
token: AUTH_TOKEN,
})

const address = FieldElement.fromBigInt(
    '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7'
  )
  
  const transferKey = [
    FieldElement.fromBigInt(hash.getSelectorFromName('Transfer'))
  ]
  
//   const filter = Filter.create()
//     .withHeader({ weak: true })
//     .addEvent((ev) => ev.withFromAddress(address).withKeys(transferKey))
//     .withStateUpdate((su) => su.addStorageDiff((st) => st.withContractAddress(address)))
//     .encode()

const filter = Filter.create()
  .addEvent((ev) =>
      ev.withFromAddress(address).withKeys(transferKey))
  .withStateUpdate((su) =>
      su.addStorageDiff((st) => st.withContractAddress(address)))
  .encode()

const cursor = StarkNetCursor.createWithBlockNumber(1045)

client.configure({
  filter,
  batchSize: 10,
//   finality: DataFinality.DATA_STATUS_ACCEPTED,
  finality: DataFinality.DATA_STATUS_FINALIZED,
  cursor,
})

for await (const message of client) {
  if (message.data?.data) {
    for (let item of message.data.data) {
      const block = starknet.Block.decode(item)
      if(block.events.length != 0) {
        // console.log(block)
        console.log(JSON.stringify(block.events, null, 4))
      }
      // use data in block
    }
  }
}
