export default {
  name: "GRCh38_chr17",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr17-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr17.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr17.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr17.fa.gz.gzi"
      }
    }
  }
};
