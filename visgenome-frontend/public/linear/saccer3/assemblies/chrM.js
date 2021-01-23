export default {
  name: "SacCer_Apr2011_chrM",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrM-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrM.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrM.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrM.fa.gz.gzi"
      }
    }
  }
};
