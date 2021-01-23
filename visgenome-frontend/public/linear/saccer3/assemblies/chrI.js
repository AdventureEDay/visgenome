export default {
  name: "SacCer_Apr2011_chrI",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrI-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrI.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrI.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrI.fa.gz.gzi"
      }
    }
  }
};
