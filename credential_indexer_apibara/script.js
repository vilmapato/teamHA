export const config = {
  streamUrl: "https://goerli.starknet.a5a.ch",
  startingBlock: 800_000,
  network: "starknet",
  finality: "DATA_STATUS_ACCEPTED",
  filter: {
    header: {},
  },
  sinkType: "console",
  sinkOptions: {},
};

// This transform does nothing.
export default function transform(block) {
  return block;
}
