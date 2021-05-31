<template>
  <div class="circos">
    <!-- :style="'height:' + fullHeight + 'px'" -->
    <el-container>
      <el-header class="title">
        <img alt="circos logo" src="../assets/circle.png" />
        Circos
      </el-header>

      <el-container style="height: 100%">
        <el-header class="label-main">
          {{ mainLabel }}
        </el-header>
        <el-main class="insert">
          <el-row type="flex" justify="center">
            <el-col :span="10">
              <!-- 染色体选择：根据基因组类型不同设置可选择的染色体编号 -->
              <el-row class="options">
                <el-col class="label" :span="8">Choose a chromosome:</el-col>
                <el-col class="content" :span="6">
                  <!-- 根据选择的染色体，changePosition设置可选择位置的大小 -->
                  <el-select
                    v-model="ruleForm.chromName"
                    placeholder="please select a chromosome"
                    @change="changePosition"
                  >
                    <el-option
                      v-for="item in options[$route.params.type]"
                      :key="item"
                      :label="item"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
              <!-- 值的类型按钮 -->
              <el-row class="options">
                <el-col class="label" :span="8">
                  Type of property values:
                </el-col>
                <el-col class="content" :span="8">
                  <el-radio-group v-model="ruleForm.valueType">
                    <el-radio-button label="original">Original</el-radio-button>
                    <el-radio-button label="standard">Standard</el-radio-button>
                  </el-radio-group>
                </el-col>
              </el-row>
              <!-- 其他参数的弹出框 -->
              <el-row class="options">
                <el-col class="label" :span="8">Other paramters:</el-col>
                <el-col class="content" :span="6">
                  <!-- 弹出框进行k值，理化特性，位置区间的设置 -->
                  <el-popover placement="right" width="600">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                      <!-- k 值选择 -->
                      <el-form-item prop="knucleotide">
                        <el-col class="label"
                          ><i>k</i>-nucleotide (<i>k</i>)</el-col
                        >
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
                      <el-form-item prop="selectedProperty">
                        <el-col class="label">
                          <i>{{ ruleForm.knucleotide }}</i
                          >-nucleotides physicochemical properties
                        </el-col>
                        <el-col class="content">
                          <el-table
                            :data="properties"
                            height="400"
                            style="padding: 0 20px"
                            empty-text="please select k-nucleotide(k=1,2,3) first"
                          >
                            <el-table-column
                              type="index"
                              width="50"
                            ></el-table-column>
                            <el-table-column width="45">
                              <template slot-scope="scope">
                                <el-radio-group
                                  v-model="ruleForm.selectedProperty"
                                >
                                  <el-radio :label="scope.row.ID">
                                    {{ blankLabel }}
                                  </el-radio>
                                </el-radio-group>
                              </template>
                            </el-table-column>
                            <el-table-column
                              property="ID"
                              label="ID"
                              width="100"
                            >
                            </el-table-column>
                            <el-table-column
                              property="property"
                              label="Property Name"
                              show-overflow-tooltip
                            ></el-table-column>
                          </el-table>

                          <p
                            style="
                              font-size: 10px;
                              color: gray;
                              line-height: 1.5em;
                            "
                          >
                            <i>You select the physicochemical property: </i>
                            <b>{{ ruleForm.selectedProperty }}</b>
                          </p>
                        </el-col>
                      </el-form-item>
                      <!-- 位置设置 -->
                      <el-form-item prop="positions">
                        <el-col class="label"
                          >Set the start and end positions &amp; Select a
                          resolution</el-col
                        >
                        <!-- <p
                          style="
                            font-size: 10px;
                            color: red;
                            line-height: 1em;
                            margin: 50px 0 0 10px;
                          "
                          @click="question"
                        >
                          selectable interval: [ 0,
                          {{
                            chromLength - ruleForm.knucleotide + 1
                              ? chromLength - ruleForm.knucleotide + 1
                              : "s-k+1"
                          }})
                          <i class="el-icon-question" style="color: gray"></i>
                        </p> -->
                        <el-row>
                          <el-row style="color: #a5c2a0">
                            <el-col :span="8">start position</el-col>
                            <el-col :span="8">end position</el-col>
                            <el-col :span="8">resolution</el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="8">
                              <el-input-number
                                v-model="ruleForm.positions.startPosition"
                                controls-position="right"
                                :min="0"
                                :max="chromLength - ruleForm.knucleotide"
                                placeholder="start"
                              >
                              </el-input-number
                            ></el-col>
                            <el-col :span="8"
                              ><el-input-number
                                v-model="ruleForm.positions.endPosition"
                                controls-position="right"
                                :min="0"
                                :max="chromLength - ruleForm.knucleotide"
                                placeholder="end"
                              >
                              </el-input-number
                            ></el-col>
                            <el-col :span="8"
                              ><el-select
                                v-model="ruleForm.resolution"
                                placeholder="please select resolution"
                              >
                                <el-option label="1" :value="1"></el-option>
                                <el-option label="100" :value="100"></el-option>
                                <el-option label="1k" :value="1000"></el-option>
                                <el-option
                                  label="25k"
                                  :value="25000"
                                ></el-option>
                                <el-option
                                  label="50k"
                                  :value="50000"
                                ></el-option>
                                <el-option
                                  label="1M"
                                  :value="1000000"
                                ></el-option> </el-select
                            ></el-col>
                          </el-row>
                        </el-row>
                      </el-form-item>
                      <el-form-item>
                        <el-button
                          type="success"
                          @click="getCircos('ruleForm')"
                        >
                          Get circos
                        </el-button>
                      </el-form-item>
                    </el-form>
                    <el-button type="warning" slot="reference"
                      >Select parameters</el-button
                    >
                  </el-popover>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="10">
              <div class="tips">
                <img
                  src="../assets/tips.png"
                  style="
                    width: 1.5em;
                    height: auto;
                    vertical-align: middle;
                    margin-right: 10px;
                  "
                />There are two plots in the circular image, one is outside the
                circle, oriented out, and the other is the same plot, but inside
                the circle, origented in. Every tick represents 5 units of
                resolution. The following example circular image is with the
                resolution set to 1.
              </div>
              <el-row style="padding: 20px 0 0 20px">
                <el-col
                  :span="4"
                  style="height: 20px; width: 25px; background-color: #fc9272"
                ></el-col>
                <el-col :span="4">value &lt; 0</el-col>
              </el-row>
              <el-row style="padding: 20px 0 0 20px">
                <el-col
                  :span="4"
                  style="height: 20px; width: 25px; background-color: #a1d99b"
                ></el-col>
                <el-col :span="4">value &gt; 0</el-col>
              </el-row>
              <el-row style="padding: 20px 0 0 20px">
                <el-col
                  :span="4"
                  style="
                    height: 25px;
                    width: 25px;
                    border: 1px solid black;
                    border-radius: 50%;
                  "
                ></el-col>
                <el-col :span="4">value = 0</el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-divider content-position="left"
            ><span style="color: #a5c2a0"
              >Notes &amp; Parameters</span
            ></el-divider
          >
          <el-row>
            <img
              src="../assets/home/ex04.png"
              alt="example circos image"
              v-show="!showImg && showExample"
              class="exampleImg"
            />
            <img
              v-show="!showImg && !showExample"
              class="loadingImg"
              src="../assets/loading.gif"
              alt="circos image"
            />
            <img
              :src="circos"
              :alt="circos"
              v-show="showImg"
              class="circosImg"
            />
          </el-row>
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
      // let length = this.chromLength - this.ruleForm.knucleotide + 1;
      // if (
      //   value.startPosition === "" ||
      //   value.endPosition === "" ||
      //   value.startPosition < 0 ||
      //   value.startPosition >= length ||
      //   value.endPosition < 0 ||
      //   value.endPosition >= length
      // ) {
      //   // 下标从0开始
      //   callback(
      //     new Error("the positions must be between 0 and " + (length - 1))
      //   );
      // }
      if (value.startPosition >= value.endPosition) {
        callback(
          new Error("the end position must be greater than the start one")
        );
      } else {
        // 这句一定得有
        callback();
      }
    };
    return {
      mainLabel: "Human GRCH38/hg38",
      ruleForm: {
        valueType: "",
        chromName: "",
        knucleotide: "k",
        selectedProperty: "",
        positions: { startPosition: 0, endPosition: 0 },
        resolution: 1, // 默认为1
      },
      // 参数验证规则
      rules: {
        valueType: [
          {
            required: true,
            message: "Please select a kind of vlaue",
            trigger: "change",
          },
        ],
        chromName: [
          {
            required: true,
            message: "Please select a chromosome",
            trigger: "change",
          },
        ],
        knucleotide: [
          {
            required: true,
            message: "Please select k-nucleotide(k=1,2,3)",
            trigger: "change",
          },
        ],
        selectedProperty: [
          {
            required: true,
            message: "Please select a physicochemical property",
            trigger: "change",
          },
        ],
        positions: [{ validator: validatePosition, trigger: "blur" }],
      },
      options: {
        human: [
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
          "chrM",
        ],
        mouse: [
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
          "chrM",
        ],
        yeast: [
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
          "chrM",
        ],
      },
      table: false, // 只有点击“show”按钮时, table值才变为true
      properties: [], // 需要在表格中显示的所有理化特性的ID和名称
      blankLabel: "",
      chromLength: 0,
      // circos: require("../assets/loading.gif"),
      circos: "",
      showImg: false,
      showExample: true,
    };
  },
  created() {
    // 页面刷新之前将状态保存到sessionStorage【2021年5月26日，去除了刷新缓存，不再缓存数据，因为涉及到路由发生改变的时候，各状态的清空操作比较多，或者需要在刷新之前保存图片？】
    // window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("circosState", JSON.stringify(this.ruleForm));
    // });
  },
  mounted() {
    let type = this.$route.params.type;

    // 如果有circosState缓存，则表示是刷新页面之前缓存下来的数据，否则是直接从菜单栏点击过来的，还需要监听路由变化，然后清除缓存
    if (sessionStorage.getItem("circosState")) {
      this.ruleForm = JSON.parse(sessionStorage.getItem("circosState"));
    } else {
      this.ruleForm.chromName =
        this.$route.params.chromName ||
        (type === "human" || type === "mouse" ? "chr1" : "chrI"); // 默认的染色体
      this.ruleForm.valueType = this.$route.params.valueType || "standard"; // 默认的值类型
      this.ruleForm.knucleotide = 1; // 默认为单元核苷酸
      this.ruleForm.selectedProperty = "MD0001"; // 默认选定的理化特性
      this.ruleForm.resolution = 1; // 默认的分辨率
      // this.ruleForm.positions = { startPosition: 500000, endPosition: 500500 };
      // this.ruleForm.chromName = this.$route.params.chromName;
      // this.ruleForm.valueType = this.$route.params.valueType;
      // this.ruleForm.knucleotide = "k";
    }
    let hgposition = { startPosition: 10000000, endPosition: 10000500 };
    let mmposition = { startPosition: 10000000, endPosition: 10000500 };
    let sacposition = { startPosition: 100000, endPosition: 100500 };
    if (type === "human") {
      this.mainLabel = "Human GRCH38/hg38";
      this.ruleForm.positions = hgposition;
    } else if (type === "mouse") {
      this.mainLabel = "Mouse GRCm39/mm39";
      this.ruleForm.positions = mmposition;
    } else if (type === "yeast") {
      this.mainLabel = "SacCer_Apr2011/sacCer3";
      this.ruleForm.positions = sacposition;
    }
    // 读取理化特性及其ID的json文件，传入参数为 k 值
    this.getProperties(this.ruleForm.knucleotide);
    // 最初进入该页面时，按照从genomes页面传过来的染色体进行chromLength的设置
    this.chromLength = chromosomeSize[type][this.ruleForm.chromName];
  },
  watch: {
    // 监听路由发生变化，清除缓存，并设置其他参数的初始值
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function (val, oldVal) {
        // 路由发生变化，则清除缓存
        if (sessionStorage.getItem("circosState")) {
          sessionStorage.removeItem("circosState");
        }
        let type = val.params.type;
        this.ruleForm.chromName =
          this.$route.params.chromName ||
          (type === "human" || type === "mouse" ? "chr1" : "chrI"); // 默认的染色体
        this.ruleForm.valueType = this.$route.params.valueType || "standard"; // 默认的值类型
        this.ruleForm.knucleotide = 1; // 默认为单元核苷酸
        this.ruleForm.selectedProperty = "MD0001"; // 默认选定的理化特性
        this.ruleForm.resolution = 1; // 默认的分辨率
        let hgposition = { startPosition: 10000000, endPosition: 10000500 };
        let mmposition = { startPosition: 10000000, endPosition: 10000500 };
        let sacposition = { startPosition: 100000, endPosition: 100500 };
        // this.ruleForm.positions = { startPosition: 500000, endPosition: 500500 };
        if (type === "human") {
          this.mainLabel = "Human GRCH38/hg38";
          this.ruleForm.positions = hgposition;
        } else if (type === "mouse") {
          this.mainLabel = "Mouse GRCm39/mm39";
          this.ruleForm.positions = mmposition;
        } else if (type === "yeast") {
          this.mainLabel = "SacCer_Apr2011/sacCer3";
          this.ruleForm.positions = sacposition;
        }
        // 这里需要验证是否在正确【2021/05/25注】
        this.chromLength = chromosomeSize[type][this.ruleForm.chromName];
        // 理化特性在开始进入页面时不设置值，后续再根据k值的选择加载理化特性文件
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
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
        this.axios.get("/properties/" + jsonFile).then((res) => {
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
        `You can set the start and end positions that are included in [0, ${_this.chromLength}-<i>k</i>+1). Because when a biological sequence is divided into a serial of <i>k</i>-mers, it will be represented by <b><i>s-k+1</i></b> physicochemical property values, where <b><i>s</i></b> is the size of the chromosome.
         <br/> You should also choose a value as the resolution to get a circular image that is displayed as average of sequence values per resolution length.`,
        "tips",
        {
          confirmButtonText: "confirm",
          dangerouslyUseHTMLString: true,
          callback: () => {},
        }
      );
    },

    // 给后端传递生成circos需要的参数
    getCircos(formName) {
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 给后端传参数
          _this.showImg = false; // 点击图片获取按钮，先显示loading图
          _this.showExample = false; // 点击按钮之后不再显示示例图片
          let genomes = { human: "hg38", mouse: "mm39", yeast: "saccer3" };
          let genome = genomes[this.$route.params.type]; // 基因组类别
          let formData = _this.ruleForm; //表单中的数据 如 值的类型，染色体名称，k值，选中的理化特性，位置参数
          this.axios.post("/circos", { genome, formData }).then((response) => {
            _this.circos = response.data.data;
            _this.showImg = true;
            // console.log(response.data.data);
          });
        } else {
          // console.log("ERROR: parameters are invalid!");
          return false;
        }
      });
    },
  },
  //注销window.onresize事件
  destroyed() {
    window.onresize = null;
  },
};
</script>

<style scoped lang="less">
// .circos {
// height: 100%;
// min-height: calc(100% - 120px);
// height: calc(100% - 120px);
// }

.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.title {
  height: 80px !important;
  line-height: 80px;
  font-size: 1.5em;
  text-align: center;
  border-bottom: 2px solid #a5c2a0;
  background: #f5f5dc;
}

.title img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

.el-aside {
  width: 16% !important;
  color: #a5c2a0;
  line-height: 40px;
  border-right: solid 2px #a5c2a0;
  padding-bottom: 30px;
}

.label {
  text-align: left;
  padding-left: 15px;
  // height: 50px;
  line-height: 60px;
}

.el-popover .label {
  color: #fff;
  background: #135560;
}

.content {
  margin: 10px 0 10px;
  text-align: left;
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

.label-main {
  width: 100%;
  height: 40px !important;
  line-height: 40px;
  // background: #bfc4c9;
  background: #a5c2a0;
  color: #f5f5f5;
  // box-shadow: 2px 2px 2px 2px #a5c2a0;
  font-size: 10px;
  font-weight: bold;
}

.el-table {
  border: solid 2px #a5c2a0;
}

/deep/ .el-radio__inner {
  border: solid 1.5px #a5c2a0 !important;
}

// /deep/ .el-drawer__header {
//   color: #a5c2a0;
// }
.exampleImg {
  width: 60%;
  height: auto;
  margin-top: -20px;
  margin-bottom: 20px;
}

.loadingImg {
  width: 100px;
  height: 100px;
  margin-top: 15%;
  margin-bottom: calc(30% + 100px);
}

.circosImg {
  width: 60%;
  height: auto;
  margin-top: -20px;
  margin-bottom: 20px;
}

.tips {
  // z-index: 1; 需要定位才能生效
  margin: 10px 20px 0 20px;
  // margin-left: 20px;
  text-align: justify;
  line-height: 1.5em;
}
</style>
