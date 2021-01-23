export default {
  name: "SacCer_Apr2011_chrIII",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrIII-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrIII.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrIII.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrIII.fa.gz.gzi"
      }
    }
  }
};
