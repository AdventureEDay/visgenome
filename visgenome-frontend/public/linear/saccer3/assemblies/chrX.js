export default {
  name: "SacCer_Apr2011_chrX",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrX-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrX.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrX.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrX.fa.gz.gzi"
      }
    }
  }
};
