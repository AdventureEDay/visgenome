export default {
  name: "GRCm39_chr15",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr15-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr15.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr15.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr15.fa.gz.gzi"
      }
    }
  }
};
