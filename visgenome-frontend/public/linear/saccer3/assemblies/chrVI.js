export default {
  name: "SacCer_Apr2011_chrVI",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrVI-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrVI.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrVI.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrVI.fa.gz.gzi"
      }
    }
  }
};
