export default {
  name: "SacCer_Apr2011_chrXI",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrXI-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrXI.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrXI.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrXI.fa.gz.gzi"
      }
    }
  }
};
