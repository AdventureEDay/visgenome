export default {
  name: "GRCm39_chr12",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr12-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr12.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr12.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr12.fa.gz.gzi"
      }
    }
  }
};
