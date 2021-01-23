export default {
  name: "GRCm39_chr4",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr4-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr4.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr4.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr4.fa.gz.gzi"
      }
    }
  }
};
