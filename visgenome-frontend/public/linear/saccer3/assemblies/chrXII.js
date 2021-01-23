export default {
  name: "SacCer_Apr2011_chrXII",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrXII-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrXII.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrXII.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrXII.fa.gz.gzi"
      }
    }
  }
};
