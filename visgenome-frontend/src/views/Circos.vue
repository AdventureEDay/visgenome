<template>
  <div class="circos">
    <!-- :style="'height:' + fullHeight + 'px'" -->
    <el-container>
      <el-aside>
        <div style="height: 50px; margin: 10px 0 10px">
          <img style="height: 50px; width: auto" src="../assets/circos.png" />
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
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
          <el-form-item class="options" prop="chromName">
            <el-col class="label">Choose chromosome</el-col>
            <el-col class="content">
              <el-select
                v-if="$route.params.type === 'human'"
                v-model="ruleForm.chromName"
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
                v-model="ruleForm.chromName"
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
                v-model="ruleForm.chromName"
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
          </el-form-item>
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
          <el-form-item class="options" prop="selectedProperty">
            <el-col class="label">
              <i>{{ knucleotide }}</i
              >-nucleotides physicochemical properties
            </el-col>
            <el-col class="content">
              <el-button type="primary" @click="table = true" plain>
                show
              </el-button>
              <p style="font-size: 10px; color: gray; line-height: 1.5em">
                <i>You select the physicochemical property: </i>
                <b>{{ propertyID }}</b>
              </p>
              <el-drawer
                title="K-nucleotides Physicochemical Properties"
                :visible.sync="table"
                direction="ltr"
                :show-close="false"
                size="35%"
                :append-to-body="true"
                @open="openDrawer"
              >
                <el-table
                  :data="properties"
                  height="85%"
                  style="padding: 0 20px"
                >
                  <el-table-column type="index" width="45"></el-table-column>
                  <el-table-column width="45">
                    <template slot-scope="scope">
                      <el-radio-group
                        v-model="ruleForm.selectedProperty"
                        @change="showProperty"
                      >
                        <el-radio :label="scope.row.ID">
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
          </el-form-item>
          <!-- 位置设置 -->
          <el-form-item class="options" prop="positions">
            <el-col class="label">Set the start and end positions</el-col>
            <p
              style="font-size: 10px; color: red; line-height: 1em"
              @click="question"
            >
              selectable interval: 0 - {{ chromLength - knucleotide + 1 }}
              <i class="el-icon-question" style="color: gray"></i>
            </p>
            <div>
              <el-input
                v-model.number="ruleForm.positions.startPosition"
                placeholder="start"
                size="mini"
                style="width: 40%; margin-right: 5px"
              >
              </el-input>
              <el-input
                v-model.number="ruleForm.positions.endPosition"
                placeholder="end"
                size="mini"
                style="width: 40%; margin-left: 5px"
              >
              </el-input>
            </div>
          </el-form-item>
        </el-form>
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
    let validatePosition = (rule, value, callback) => {
      let length = this.chromLength - this.knucleotide + 1;
      if (
        value.startPosition === "" ||
        value.endPosition === "" ||
        value.startPosition < 0 ||
        value.startPosition > length ||
        value.endPosition < 0 ||
        value.endPosition > length
      ) {
        return callback(
          new Error("the positions must be between 0 and " + length)
        );
      }
      if (value.startPosition >= value.endPosition) {
        return callback(
          new Error("the start position must be greater than the end one")
        );
      }
      // 可能在后续还需要保证start和end之间的差值不超过一个数值。。。。。
    };
    return {
      // 减120是减去页眉和页脚的高度
      fullHeight: window.innerHeight - 120,
      mainLabel: "Human GRCH38/hg38",
      valueType: "",
      ruleForm: {
        chromName: "",
        selectedProperty: "",
        positions: { startPosition: "", endPosition: "" }
      },
      rules: {
        chromName: [
          {
            required: true,
            message: "Please select a chromosome",
            trigger: "change"
          }
        ],
        selectedProperty: [
          {
            required: true,
            message: "Please select a physicochemical property",
            trigger: "change"
          }
        ],
        positions: [{ validator: validatePosition, trigger: "blur" }]
      },
      // chromName: "",
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
      table: false, // 只有点击“show”按钮时, table值才变为true
      properties: [], // 需要在表格中显示的所有理化特性的ID和名称
      blankLabel: "",
      chromLength: 0,
      propertyID: "" // 如果没有propertyID, 那么刷新的时候没有办法渲染到已选择的提示语部分
    };
  },
  created() {
    // 页面刷新之前将状态保存到sessionStorage
    window.addEventListener("beforeunload", () => {
      // console.log(this.ruleForm.selectedProperty);
      sessionStorage.setItem(
        "circosState",
        JSON.stringify({
          valueType: this.valueType,
          chromName: this.ruleForm.chromName,
          knucleotide: this.knucleotide,
          selectedProperty: this.ruleForm.selectedProperty,
          positions: this.ruleForm.positions
        })
      );
    });
  },
  mounted() {
    let _this = this;
    window.onresize = () => {
      _this.get_browseHeight();
    };
    let type = this.$route.params.type;

    if (sessionStorage.getItem("circosState")) {
      this.valueType = JSON.parse(
        sessionStorage.getItem("circosState")
      ).valueType;
      this.ruleForm.chromName = JSON.parse(
        sessionStorage.getItem("circosState")
      ).chromName;
      this.knucleotide = JSON.parse(
        sessionStorage.getItem("circosState")
      ).knucleotide;
      this.propertyID = JSON.parse(
        sessionStorage.getItem("circosState")
      ).selectedProperty;
      // console.log(this.ruleForm.selectedProperty); // 控制不了抽屉中的元素，可能不是在这个阶段渲染的抽屉中的？
      this.ruleForm.positions = JSON.parse(
        sessionStorage.getItem("circosState")
      ).positions;
    } else {
      this.ruleForm.chromName = this.$route.params.chromName;
      this.valueType = this.$route.params.valueType;
      this.knucleotide = 1;
    }

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
    this.chromLength = chromosomeSize[type][this.ruleForm.chromName];
  },
  methods: {
    get_browseHeight() {
      this.fullHeight = window.innerHeight - 120;
    },

    // 根据k值，改变properties的内容
    getProperties(knucleotide) {
      this.ruleForm.selectedProperty = "";
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
      this.propertyID = this.ruleForm.selectedProperty;
    },
    // 抽屉打开时，将selectedProperty绑定到里面，在mounted中不能显示默认选中项
    openDrawer() {
      if (sessionStorage.getItem("circosState")) {
        this.ruleForm.selectedProperty = JSON.parse(
          sessionStorage.getItem("circosState")
        ).selectedProperty;
        this.propertyID = this.ruleForm.selectedProperty;
      }
    },

    changePosition() {
      this.chromLength =
        chromosomeSize[this.$route.params.type][this.ruleForm.chromName];
    },

    question() {
      let _this = this;
      this.$alert(
        "You can set the start and end positions that are included in [0, " +
          _this.chromLength +
          "-<i>k</i>+1]. Because when a biological sequence is divided into a serial of <i>k</i>-mers, it will be represented by <b><i>s-k+1</i></b> physicochemical property values, where <b><i>s</i></b> is the size of the chromosome.",
        "tips",
        {
          confirmButtonText: "confirm",
          dangerouslyUseHTMLString: true,
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
  width: 30% !important;
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
