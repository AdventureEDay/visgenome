export default {
  name: "GRCm39_chr2",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr2-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr2.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr2.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr2.fa.gz.gzi"
      }
    }
  }
};
