export default {
  name: "GRCm39_chr8",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr8-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr8.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr8.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr8.fa.gz.gzi"
      }
    }
  }
};
