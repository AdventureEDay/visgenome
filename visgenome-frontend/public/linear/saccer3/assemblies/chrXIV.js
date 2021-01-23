export default {
  name: "SacCer_Apr2011_chrXIV",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrXIV-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrXIV.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrXIV.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrXIV.fa.gz.gzi"
      }
    }
  }
};
