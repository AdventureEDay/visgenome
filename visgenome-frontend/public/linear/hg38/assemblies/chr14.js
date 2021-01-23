export default {
  name: "GRCh38_chr14",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr14-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr14.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr14.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr14.fa.gz.gzi"
      }
    }
  }
};
