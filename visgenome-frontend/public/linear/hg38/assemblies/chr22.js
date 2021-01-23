export default {
  name: "GRCh38_chr22",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr22-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr22.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr22.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr22.fa.gz.gzi"
      }
    }
  }
};
