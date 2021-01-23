export default {
  name: "SacCer_Apr2011_chrII",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrII-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrII.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrII.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrII.fa.gz.gzi"
      }
    }
  }
};
