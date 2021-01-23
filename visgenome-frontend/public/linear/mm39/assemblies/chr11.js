export default {
  name: "GRCm39_chr11",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr11-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr11.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr11.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr11.fa.gz.gzi"
      }
    }
  }
};
