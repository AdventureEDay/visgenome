export default {
  name: "SacCer_Apr2011_chrV",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrV-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrV.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrV.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrV.fa.gz.gzi"
      }
    }
  }
};
