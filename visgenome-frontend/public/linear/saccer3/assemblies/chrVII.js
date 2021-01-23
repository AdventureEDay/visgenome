export default {
  name: "SacCer_Apr2011_chrVII",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrVII-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrVII.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrVII.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrVII.fa.gz.gzi"
      }
    }
  }
};
