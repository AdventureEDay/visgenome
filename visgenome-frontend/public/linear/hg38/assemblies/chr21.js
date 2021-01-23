export default {
  name: "GRCh38_chr21",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr21-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr21.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr21.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr21.fa.gz.gzi"
      }
    }
  }
};
