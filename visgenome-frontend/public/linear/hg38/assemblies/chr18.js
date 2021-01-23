export default {
  name: "GRCh38_chr18",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr18-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr18.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr18.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr18.fa.gz.gzi"
      }
    }
  }
};
