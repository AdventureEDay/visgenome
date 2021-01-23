export default {
  name: "GRCm39_chr18",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr18-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr18.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr18.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr18.fa.gz.gzi"
      }
    }
  }
};
