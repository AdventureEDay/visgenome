export default {
  name: "GRCh38_chr16",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr16-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr16.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr16.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr16.fa.gz.gzi"
      }
    }
  }
};
