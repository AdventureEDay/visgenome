export default {
  name: "GRCh38_chr2",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr2-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr2.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr2.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr2.fa.gz.gzi"
      }
    }
  }
};
