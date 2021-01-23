export default {
  name: "GRCm39_chr7",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr7-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr7.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr7.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr7.fa.gz.gzi"
      }
    }
  }
};
