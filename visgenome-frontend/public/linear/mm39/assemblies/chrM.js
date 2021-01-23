export default {
  name: "GRCm39_chrM",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chrM-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chrM.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chrM.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chrM.fa.gz.gzi"
      }
    }
  }
};
