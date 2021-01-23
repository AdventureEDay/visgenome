export default {
  name: "SacCer_Apr2011_chrVIII",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011_chrVIII-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/chrVIII.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/chrVIII.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/chrVIII.fa.gz.gzi"
      }
    }
  }
};
