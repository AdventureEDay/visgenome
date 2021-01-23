export default {
  name: "GRCh38_chr8",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr8-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr8.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr8.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr8.fa.gz.gzi"
      }
    }
  }
};
