export default {
  name: "GRCm39_chr19",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr19-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr19.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr19.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr19.fa.gz.gzi"
      }
    }
  }
};
