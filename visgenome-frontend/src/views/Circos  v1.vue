<template>
  <div class="circos">
    <!-- :style="'height:' + fullHeight + 'px'" -->
    <el-container>
      <el-aside>
        <div style="height: 50px; margin: 10px 0 10px">
          <img style="height: 50px; width: auto" src="../assets/circos.png" />
        </div>
        <!-- 值的类型按钮 -->
        <el-row class="options">
          <el-col class="label"> Type of property values </el-col>
          <el-col class="content">
            <el-radio-group v-model="valueType">
              <el-radio-button label="original">Original</el-radio-button>
              <el-radio-button label="standard">Standard</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <!-- 染色体选择 -->
        <el-row class="options">
          <el-col class="label">Choose chromosome</el-col>
          <el-col class="content">
            <el-select
              v-if="$route.params.type === 'human'"
              v-model="chromName"
              placeholder="please select"
              @change="changePosition"
            >
              <el-option
                v-for="item in optionsHum"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
            <el-select
              v-if="$route.params.type === 'mouse'"
              v-model="chromName"
              placeholder="please select"
              @change="changePosition"
            >
              <el-option
                v-for="item in optionsMou"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
            <el-select
              v-if="$route.params.type === 'yeast'"
              v-model="chromName"
              placeholder="please select"
              @change="changePosition"
            >
              <el-option
                v-for="item in optionsYea"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- k 值选择 -->
        <el-row class="options">
          <el-col class="label"><i>k</i>-nucleotide (<i>k</i>)</el-col>
          <el-col class="content">
            <el-radio-group v-model="knucleotide" @change="getProperties">
              <el-radio :label="1">1</el-radio>
              <el-radio :label="2">2</el-radio>
              <el-radio :label="3">3</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <!-- 理化特性选择 -->
        <el-row class="options">
          <el-col class="label">
            <i>{{ knucleotide }}</i
            >-nucleotides physicochemical properties
          </el-col>
          <el-col class="content">
            <el-button type="primary" @click="table = true" plain>
              show
            </el-button>
            <p style="font-size: 10px; color: red; line-height: 1.5em;"> 
              <i>You select the physicochemical property: </i><b>{{ selectedProperty.ID }} : {{ selectedProperty.property }}</b>
            </p>
            <el-drawer
              title="K-nucleotides Physicochemical Properties"
              :visible.sync="table"
              direction="ltr"
              :show-close="false"
              size="35%"
              :append-to-body="false"
            >
              <el-table :data="properties" height="85%" style="padding:0 20px;">
                <el-table-column type="index" width="45"></el-table-column>
                <el-table-column width="45">
                  <template slot-scope="scope">
                    <el-radio-group
                      v-model="selectedProperty"
                      @change="showProperty"
                    >
                      <el-radio :label="scope.row">
                        {{ blankLabel }}
                      </el-radio>
                    </el-radio-group>
                  </template>
                </el-table-column>
                <el-table-column property="ID" label="ID" width="100">
                </el-table-column>
                <el-table-column
                  property="property"
                  label="Property Name"
                  show-overflow-tooltip
                ></el-table-column>
              </el-table>
            </el-drawer>
          </el-col>
        </el-row>
        <!-- 位置设置 -->
        <el-row class="options">
          <el-col class="label">Set the start and end positions</el-col>
          <p
            style="font-size: 10px; color: red; line-height: 1em;"
            @click="question"
          >
            selectable interval: 0 - ({{ chromLength }} - <i>k</i> + 1)
            <i class="el-icon-question" style="color: gray;"></i>
          </p>
          <div>
            <el-input v-model.number="startPosition" placeholder="start" size="mini" style="width: 40%; margin-right: 5px;"></el-input>
            <el-input v-model.number="endPosition" placeholder="end" size="mini" style="width: 40%; margin-left: 5px;"></el-input>
          </div>
        </el-row>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          {{ mainLabel }}
        </el-header>
        <el-main class="insert"> circos图片显示区 </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import chromosomeSize from "../assets/chromosome.size.json";

export default {
  name: "Circos",
  data() {
    return {
      // 减120是减去页眉和页脚的高度
      fullHeight: window.innerHeight - 120,
      mainLabel: "Human GRCH38/hg38",
      valueType: "original",
      chromName: "",
      // chromHum: "chr1",
      optionsHum: [
        "chr1",
        "chr2",
        "chr3",
        "chr4",
        "chr5",
        "chr6",
        "chr7",
        "chr8",
        "chr9",
        "chr10",
        "chr11",
        "chr12",
        "chr13",
        "chr14",
        "chr15",
        "chr16",
        "chr17",
        "chr18",
        "chr19",
        "chr20",
        "chr21",
        "chr22",
        "chrX",
        "chrY",
        "chrM"
      ],
      // chromMou: "chr1",
      optionsMou: [
        "chr1",
        "chr2",
        "chr3",
        "chr4",
        "chr5",
        "chr6",
        "chr7",
        "chr8",
        "chr9",
        "chr10",
        "chr11",
        "chr12",
        "chr13",
        "chr14",
        "chr15",
        "chr16",
        "chr17",
        "chr18",
        "chr19",
        "chrX",
        "chrY",
        "chrM"
      ],
      // chromYea: "chrI",
      optionsYea: [
        "chrI",
        "chrII",
        "chrIII",
        "chrIV",
        "chrV",
        "chrVI",
        "chrVII",
        "chrVIII",
        "chrIX",
        "chrX",
        "chrXI",
        "chrXII",
        "chrXIII",
        "chrXIV",
        "chrXV",
        "chrXVI",
        "chrM"
      ],
      knucleotide: 1,
      table: false, // 只有点击“show”按钮时，table值才变为true
      properties: [],
      selectedProperty: "",
      blankLabel: "",
      chromLength: 0,
      startPosition: "",
      endPosition: ""
    };
  },
  mounted() {
    let _this = this;
    window.onresize = () => {
      _this.get_browseHeight();
    };
    let type = this.$route.params.type;
    let chromName = this.$route.params.chromName;
    this.chromName = chromName;
    this.valueType = this.$route.params.valueType;
    if (type === "human") {
      this.mainLabel = "Human GRCH38/hg38";
    } else if (type === "mouse") {
      this.mainLabel = "Mouse GRCm39/mm39";
    } else if (type === "yeast") {
      this.mainLabel = "SacCer_Apr2011/sacCer3";
    }
    // 读取理化特性及其ID的json文件，传入参数为 k 值
    this.getProperties(this.knucleotide);
    // console.log(chromosomeSize);
    // 最初进入该页面时，按照从genomes页面传过来的染色体进行chromLength的设置
    this.chromLength = chromosomeSize[type][chromName];
  },
  watch: {
    // 监听路由变化，每次进入页面都是original
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function(val, oldVal) {
        this.valueType = "original";
        if (val.params.type === "human") {
          this.chromName = "chr1";
        } else if (val.params.type === "mouse") {
          this.chromName = "chr1";
        } else if (val.params.type === "yeast") {
          this.chromName = "chrI";
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    get_browseHeight() {
      this.fullHeight = window.innerHeight - 120;
    },

    // 根据k值，改变properties的内容
    getProperties(knucleotide) {
      let jsonFile = "monodna.json";
      if (knucleotide === 2) jsonFile = "didna.json";
      else if (knucleotide === 3) jsonFile = "tridna.json";
      this.axios
        .get("http://localhost:8080/properties/" + jsonFile)
        .then(res => {
          // console.log(res.data);
          this.properties = res.data;
        });
    },

    showProperty() {
      console.log(this.selectedProperty);
    },

    changePosition() {
      this.chromLength =
        chromosomeSize[this.$route.params.type][this.chromName];
    },

    question() {
      let _this = this;
      this.$alert(
        "You can set the start and end positions that are included in [0, " +
          _this.chromLength +
          "-k+1]. Because when a biological sequence is divided into a serial of k-mers, it will be represented by s-k+1 physicochemical property values, where s is the size of the chromosome.",
        "tips",
        {
          confirmButtonText: "confirm",
          callback: () => {}
        }
      );
    }
  },
  //注销window.onresize事件
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style scoped lang="less">
.circos {
  height: 100%;
}

.insert {
  width: 100%;
  height: 80%;
  margin: 0 auto;
}

.el-container {
  height: 100%;
}

.el-aside {
  width: 20% !important;
  color: #a5c2a0;
  line-height: 40px;
  border-right: solid 2px #a5c2a0;
  padding-bottom: 30px;
}

.label {
  text-align: left;
  padding-left: 15px;
}

.options {
  border-bottom: #a5c2a0 double 3px;
}

.content {
  margin: 10px 0 10px;
}

/deep/ .el-input {
  width: 188px;
}

/deep/ .el-input__inner {
  border: 1px solid #a5c2a0;
  background: #f5f5f5;
}

/deep/ .el-radio-button__inner {
  border: 1px solid #a5c2a0;
  background: #f5f5f5;
}

.el-main {
  height: 100%;
  padding: 0px;
}

.main-header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #bfc4c9;
}

.el-table {
  border: solid 1px #a5c2a0;
}

/deep/ .el-radio__inner {
  border: solid 1.5px #a5c2a0 !important;
}

/deep/ .el-drawer__header {
  color: #a5c2a0;
}
</style>
