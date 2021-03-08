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
          <el-form-item class="options" prop="valueType">
            <el-col class="label"> Type of property values </el-col>
            <el-col class="content">
              <el-radio-group v-model="ruleForm.valueType">
                <el-radio-button label="original">Original</el-radio-button>
                <el-radio-button label="standard">Standard</el-radio-button>
              </el-radio-group>
            </el-col>
          </el-form-item>
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
          <el-form-item class="options" prop="knucleotide">
            <el-col class="label"><i>k</i>-nucleotide (<i>k</i>)</el-col>
            <el-col class="content">
              <el-radio-group
                v-model="ruleForm.knucleotide"
                @change="changeProperties"
              >
                <el-radio :label="1">1</el-radio>
                <el-radio :label="2">2</el-radio>
                <el-radio :label="3">3</el-radio>
              </el-radio-group>
            </el-col>
          </el-form-item>
          <!-- 理化特性选择 -->
          <el-form-item class="options" prop="selectedProperty">
            <el-col class="label">
              <i>{{ ruleForm.knucleotide }}</i
              >-nucleotides physicochemical properties
            </el-col>
            <el-col class="content">
              <el-button type="primary" @click="table = true">
                show
              </el-button>
              <p style="font-size: 10px; color: gray; line-height: 1.5em">
                <i>You select the physicochemical property: </i>
                <b>{{ ruleForm.selectedProperty }}</b>
              </p>
              <el-drawer
                title="K-nucleotides Physicochemical Properties"
                :visible.sync="table"
                direction="ltr"
                :show-close="false"
                size="35%"
                :append-to-body="true"
              >
                <el-table
                  :data="properties"
                  height="85%"
                  style="padding: 0 20px"
                  empty-text="please select k-nucleotide(k=1,2,3) first"
                >
                  <el-table-column type="index" width="45"></el-table-column>
                  <el-table-column width="45">
                    <template slot-scope="scope">
                      <el-radio-group v-model="ruleForm.selectedProperty">
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
              selectable interval: 0 -
              {{ chromLength - ruleForm.knucleotide + 1 - 1}}
              <!-- 因为下表从0开始 -->
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
          <el-form-item>
            <el-button type="success" @click="getCircos('ruleForm')">
              Get circos
            </el-button>
          </el-form-item>
        </el-form>
      </el-aside>
      <el-container style="height: 100%">
        <el-header style="height: 40px; font-size: 10px; font-weight: bold;">
          {{ mainLabel }}
        </el-header>
        <el-main class="insert">
          <img
            v-if="showLoading"
            class="loadingImg"
            src="../assets/loading.gif"
            alt="circos image"
          />
          <img
            :src="circos"
            alt="circos image"
            v-if="showCircos"
            class="circosImg"
          />
        </el-main>
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
      let length = this.chromLength - this.ruleForm.knucleotide + 1;
      if (
        value.startPosition === "" ||
        value.endPosition === "" ||
        value.startPosition < 0 ||
        value.startPosition >= length ||
        value.endPosition < 0 ||
        value.endPosition >= length
      ) {
        // 下标从0开始
        callback(new Error("the positions must be between 0 and " + (length-1)));
      }
      if (value.startPosition >= value.endPosition) {
        callback(
          new Error("the end position must be greater than the start one")
        );
      } else if (value.endPosition - value.startPosition > 500) {
        callback(
          // 这里将开始位置和结束位置之间的差值控制在了200
          new Error(
            "the difference value between start and end positions must be smaller than 200"
          )
        );
      } else {
        // 这句一定得有
        callback();
      }
    };
    return {
      // 减120是减去页眉和页脚的高度
      fullHeight: window.innerHeight - 120,
      mainLabel: "Human GRCH38/hg38",
      ruleForm: {
        valueType: "",
        chromName: "",
        knucleotide: "k",
        selectedProperty: "",
        positions: { startPosition: "", endPosition: "" }
      },
      rules: {
        valueType: [
          {
            required: true,
            message: "Please select a kind of vlaue",
            trigger: "change"
          }
        ],
        chromName: [
          {
            required: true,
            message: "Please select a chromosome",
            trigger: "change"
          }
        ],
        knucleotide: [
          {
            required: true,
            message: "Please select k-nucleotide(k=1,2,3)",
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
      table: false, // 只有点击“show”按钮时, table值才变为true
      properties: [], // 需要在表格中显示的所有理化特性的ID和名称
      blankLabel: "",
      chromLength: 0,
      // circos: require("../assets/loading.gif"),
      circos: "",
      showLoading: false,
      showCircos: false
    };
  },
  created() {
    // 页面刷新之前将状态保存到sessionStorage
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("circosState", JSON.stringify(this.ruleForm));
    });
  },
  mounted() {
    let _this = this;
    window.onresize = () => {
      _this.get_browseHeight();
    };
    let type = this.$route.params.type;

    if (sessionStorage.getItem("circosState")) {
      this.ruleForm = JSON.parse(sessionStorage.getItem("circosState"));
    } else {
      this.ruleForm.chromName = this.$route.params.chromName;
      this.ruleForm.valueType = this.$route.params.valueType;
      this.ruleForm.knucleotide = "k";
    }

    if (type === "human") {
      this.mainLabel = "Human GRCH38/hg38";
    } else if (type === "mouse") {
      this.mainLabel = "Mouse GRCm39/mm39";
    } else if (type === "yeast") {
      this.mainLabel = "SacCer_Apr2011/sacCer3";
    }
    // 读取理化特性及其ID的json文件，传入参数为 k 值
    this.getProperties(this.ruleForm.knucleotide);
    // 最初进入该页面时，按照从genomes页面传过来的染色体进行chromLength的设置
    this.chromLength = chromosomeSize[type][this.ruleForm.chromName];
  },
  methods: {
    get_browseHeight() {
      this.fullHeight = window.innerHeight - 120;
    },

    // 在没有进行页面刷新的时候，根据k值，改变properties的内容
    changeProperties(knucleotide) {
      // this.propertyID = "";
      this.ruleForm.selectedProperty = "";
      this.getProperties(knucleotide);
    },
    // 在刚进入页面以及刷新之后，获取理化特性列表
    getProperties(knucleotide) {
      // 有k值的时候再去获取json文件
      if (knucleotide != "k") {
        let jsonFile = "monodna.json";
        if (knucleotide === 2) jsonFile = "didna.json";
        else if (knucleotide === 3) jsonFile = "tridna.json";
        this.axios
          .get("http://localhost:8080/properties/" + jsonFile)
          .then(res => {
            // console.log(res.data);
            this.properties = res.data;
          });
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
    },

    // 给后端传递生成circos需要的参数
    getCircos(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 给后端传参数
          // console.log("submit");
          _this.showCircos = false; // 在图片获取之后，又再次点击circos按钮时，只显示loading
          _this.showLoading = true; // 在点击获取circos按钮之后，先显示loading图
          let genomes = { human: "hg38", mouse: "mm39", yeast: "saccer3" };
          let genome = genomes[this.$route.params.type]; // 基因组类别
          let formData = _this.ruleForm; //表单中的数据 如 值的类型，染色体名称，k值，选中的理化特性，位置参数
          this.axios.post("/circos", { genome, formData }).then(response => {
            _this.circos = response.data.data;
            _this.showCircos = true; // 当后端circos图的url返回后，显示circos图
            _this.showLoading = false; // 不显示loading图
            // console.log(response.data.data);
          });
        } else {
          console.log("ERROR: parameters are invalid!");
          return false;
        }
      });
    }
  },
  //注销window.onresize事件
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style scoped lang="less">
// .circos {
//  height: 100%;
// }

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

.el-header {
  width: 100%;
  line-height: 40px;
  // background: #bfc4c9;
  background: #a5c2a0;
  color: #f5f5f5;
  box-shadow: 2px 2px 2px 2px #a5c2a0;
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

.loadingImg {
  width: 100px;
  height: auto;
  margin-top: calc(25% + 10px);
}

.circosImg {
  width: 600px;
  height: auto;
  margin-top: 5%;
}
</style>
