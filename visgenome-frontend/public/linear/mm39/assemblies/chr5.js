export default {
  name: "GRCm39_chr5",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr5-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr5.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr5.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr5.fa.gz.gzi"
      }
    }
  }
};
