export default {
  name: "GRCh38_chr12",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr12-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr12.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr12.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr12.fa.gz.gzi"
      }
    }
  }
};
