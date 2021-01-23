export default {
  name: "GRCm39_chr6",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr6-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr6.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr6.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr6.fa.gz.gzi"
      }
    }
  }
};
