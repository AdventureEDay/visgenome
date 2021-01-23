export default {
  name: "GRCh38_chr20",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr20-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr20.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr20.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr20.fa.gz.gzi"
      }
    }
  }
};
