import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // Circos页面刷新需要保留状态的5的主要参数
    valueType: "original", // 默认为original
    chromName: "chrM", // 默认为chrM
    knucleotide: 1, // 默认  k = 1
    selectedProperty: "", // 默认值为空
    positions: { startPosition: "", endPosition: "" }
  },
  mutations: {
    storeValueType(state, type) {
      state.valueType = type;
    },
    storeChromName(state, chrom) {
      state.chromName = chrom;
    },
    storeKnucleotide(state, tide) {
      state.chromName = tide;
    },
    storeSelectedProperty(state, property) {
      state.selectedProperty = property;
    },
    storePositions(state, start, end) {
      state.positions.startPosition = start;
      state.positions.endPosition = end;
    }
  }
});

export default store;
