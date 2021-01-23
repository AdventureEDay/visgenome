export default {
  name: "GRCm39_chr14",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr14-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr14.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr14.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr14.fa.gz.gzi"
      }
    }
  }
};
