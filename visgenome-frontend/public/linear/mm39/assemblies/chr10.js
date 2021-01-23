export default {
  name: "GRCm39_chr10",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr10-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr10.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr10.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr10.fa.gz.gzi"
      }
    }
  }
};
