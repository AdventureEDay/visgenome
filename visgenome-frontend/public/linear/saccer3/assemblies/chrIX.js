export default {
  name: "SacCer_Apr2011_chrIX",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrIX-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrIX.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrIX.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrIX.fa.gz.gzi"
      }
    }
  }
};
