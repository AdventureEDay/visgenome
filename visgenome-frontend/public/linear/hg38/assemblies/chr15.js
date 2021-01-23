export default {
  name: "GRCh38_chr15",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr15-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr15.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr15.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr15.fa.gz.gzi"
      }
    }
  }
};
