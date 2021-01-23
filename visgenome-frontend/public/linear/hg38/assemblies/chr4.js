export default {
  name: "GRCh38_chr4",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr4-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr4.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr4.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr4.fa.gz.gzi"
      }
    }
  }
};
