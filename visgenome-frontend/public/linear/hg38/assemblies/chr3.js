export default {
  name: "GRCh38_chr3",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr3-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr3.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr3.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr3.fa.gz.gzi"
      }
    }
  }
};
