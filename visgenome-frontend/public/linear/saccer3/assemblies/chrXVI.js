export default {
  name: "SacCer_Apr2011_chrXVI",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrXVI-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrXVI.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrXVI.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrXVI.fa.gz.gzi"
      }
    }
  }
};
