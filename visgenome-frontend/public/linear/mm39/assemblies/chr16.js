export default {
  name: "GRCm39_chr16",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr16-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr16.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr16.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr16.fa.gz.gzi"
      }
    }
  }
};
