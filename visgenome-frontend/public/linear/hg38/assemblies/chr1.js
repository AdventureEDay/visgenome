export default {
  name: "GRCh38_chr1",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr1-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr1.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr1.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr1.fa.gz.gzi"
      }
    }
  }
};
