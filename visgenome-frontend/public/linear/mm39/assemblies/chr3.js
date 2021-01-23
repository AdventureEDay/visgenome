export default {
  name: "GRCm39_chr3",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr3-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr3.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr3.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr3.fa.gz.gzi"
      }
    }
  }
};
