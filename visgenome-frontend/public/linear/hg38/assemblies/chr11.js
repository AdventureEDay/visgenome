export default {
  name: "GRCh38_chr11",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr11-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr11.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr11.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr11.fa.gz.gzi"
      }
    }
  }
};
