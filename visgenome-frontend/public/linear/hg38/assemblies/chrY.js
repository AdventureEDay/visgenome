export default {
  name: "GRCh38_chrY",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chrY-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chrY.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chrY.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chrY.fa.gz.gzi"
      }
    }
  }
};
