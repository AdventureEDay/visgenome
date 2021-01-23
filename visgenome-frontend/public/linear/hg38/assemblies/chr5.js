export default {
  name: "GRCh38_chr5",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr5-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr5.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr5.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr5.fa.gz.gzi"
      }
    }
  }
};
