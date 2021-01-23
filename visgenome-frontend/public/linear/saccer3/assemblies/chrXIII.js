export default {
  name: "SacCer_Apr2011_chrXIII",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrXIII-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrXIII.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrXIII.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrXIII.fa.gz.gzi"
      }
    }
  }
};
