export default {
  name: "GRCh38_chrX",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chrX-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chrX.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chrX.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chrX.fa.gz.gzi"
      }
    }
  }
};
