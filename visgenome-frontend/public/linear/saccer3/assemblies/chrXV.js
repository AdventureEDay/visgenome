export default {
  name: "SacCer_Apr2011_chrXV",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrXV-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrXV.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrXV.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrXV.fa.gz.gzi"
      }
    }
  }
};
