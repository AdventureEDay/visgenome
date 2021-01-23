export default {
  name: "GRCh38_chr7",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr7-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr7.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr7.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr7.fa.gz.gzi"
      }
    }
  }
};
