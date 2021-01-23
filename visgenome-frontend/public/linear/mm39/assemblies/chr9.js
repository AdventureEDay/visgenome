export default {
  name: "GRCm39_chr9",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39_chr9-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/chr9.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/chr9.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/chr9.fa.gz.gzi"
      }
    }
  }
};
