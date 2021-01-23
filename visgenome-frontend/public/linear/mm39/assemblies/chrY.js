export default {
  name: "GRCm39_chrY",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chrY-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chrY.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chrY.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chrY.fa.gz.gzi"
      }
    }
  }
};
