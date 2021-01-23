export default {
  name: "GRCh38_chr9",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr9-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr9.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr9.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr9.fa.gz.gzi"
      }
    }
  }
};
