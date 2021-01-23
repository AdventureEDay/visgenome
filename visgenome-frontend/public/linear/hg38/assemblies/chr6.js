export default {
  name: "GRCh38_chr6",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr6-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr6.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr6.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr6.fa.gz.gzi"
      }
    }
  }
};
