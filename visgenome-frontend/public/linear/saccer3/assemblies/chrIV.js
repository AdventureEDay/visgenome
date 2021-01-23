export default {
  name: "SacCer_Apr2011_chrIV",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrIV-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrIV.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrIV.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrIV.fa.gz.gzi"
      }
    }
  }
};
