export default {
  name: "GRCm39_chrX",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chrX-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chrX.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chrX.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chrX.fa.gz.gzi"
      }
    }
  }
};
