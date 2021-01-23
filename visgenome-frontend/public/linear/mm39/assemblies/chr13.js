export default {
  name: "GRCm39_chr13",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr13-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr13.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr13.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr13.fa.gz.gzi"
      }
    }
  }
};
