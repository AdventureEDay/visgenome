export default {
  name: "GRCm39_chr17",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr17-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr17.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr17.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr17.fa.gz.gzi"
      }
    }
  }
};
