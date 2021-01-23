export default {
  name: "GRCh38_chrM",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chrM-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chrM.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chrM.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chrM.fa.gz.gzi"
      }
    }
  }
};
