export default {
  name: "GRCh38_chr10",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr10-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr10.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr10.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr10.fa.gz.gzi"
      }
    }
  }
};
