export default {
  name: "GRCm39_chr1",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr1-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr1.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr1.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr1.fa.gz.gzi"
      }
    }
  }
};
