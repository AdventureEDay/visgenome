export default {
  name: "GRCh38_chr13",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr13-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr13.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr13.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr13.fa.gz.gzi"
      }
    }
  }
};
