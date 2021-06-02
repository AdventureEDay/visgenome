<template>
  <div class="help">
    <el-row class="title">
      <img alt="home logo" src="../assets/help.png" />
      Tutorial
    </el-row>
    <el-collapse v-model="activeName" accordion class="content">
      <el-collapse-item title="1. Overview" name="1">
        <div>
          <p>
            We developed iVisGenome (<b
              ><a href="https://ivisgene.pufengdu.org"
                >https://ivisgene.pufengdu.org</a
              ></b
            >) to visualize whole-genome sequences of <i>Human</i> (Human
            GRCh38/hg38), <i>Mouse</i>(Mouse GRCm39/mm39), and
            <i>Saccharomyces cerevisiae</i> (SacCer_Apr2011/sacCer3). We
            converted chromosome sequences into a series of <i>k</i>-nucleotide
            (e.g. mononucleotide, dinucleotide, and trinucleotide)
            physicochemical property values and then visualized them by tracks
            which can be rendered in 3 forms (e.g. xyplot, line, and density)
            and circular images.
          </p>
          <p>
            The
            <router-link to="/genomes/human"
              ><b><i>Tracks</i></b></router-link
            >
            page provided 160 available tracks for every reference sequence per
            combination of a chromosome and one type of property value.
          </p>
          <p>
            The
            <router-link to="/vis_circos/human"
              ><b><i>Circos</i></b></router-link
            >
            page provided a circular image according to the parameters selected.
          </p>
          <p>
            The
            <router-link to="/download"
              ><b><i>Download</i></b></router-link
            >
            page list static links to whole-genome sequences, bgzip-compressed
            indexed FASTA, <i>k</i>-nucleotide physicochemical property values,
            and all source codes of iVisGenome.
          </p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="2. Tracks tutorial" name="2">
        <div>
          <p>
            The <i>Tracks</i> menu includes three sub-menus, that is
            <i>Human GRCh38/hg38</i>, <i>Mouse GRCHm39/mm39</i>, and
            <i>SacCer_Apr2011/sacCer3</i>, displaying tracks of three different
            genome assemblies respectively.
          </p>
          <p>
            <strong>(1).</strong> There are two parts in each sub-page. The top
            part is the area of parameters selection and legends description.
            The bottom part is the tracks display area. In the tracks display
            area, users can select reference sequence and one or more
            quantitative tracks in the track selector menu. The left of the
            bottom part is linear genome view.
          </p>
          <div class="helpImg">
            <img src="../assets/help/track01.png" alt="Track help" />
          </div>
          <p>
            <strong>(2).</strong> Users can get a good understanding of linear
            genome view and track selector menu with the guide following.
          </p>
          <p><strong>Linear genome view</strong></p>
          <p>
            Users can edit track configs by clicking on the left top hamburger
            menu. For example, track labels can be positioned on their own row
            or overlapping the data and can also be hidden by selecting a
            specific position (e.g. Overlapping, Offset, and Hidden) of track
            labels.
          </p>
          In the header of the view, users can:
          <ul>
            <li>
              Click on
              <button type="button"><i class="el-icon-back"></i></button> and
              <button><i class="el-icon-right"></i></button> to adjust the
              positions displayed in the view.
            </li>
            <li>
              Enter syntax chr1:100,000..100,100 or chr1:100,000-100,100 in the
              location search box to get a specific position region.
            </li>
            <li>
              Click on <i class="el-icon-zoom-in"></i> to zoom in or
              <i class="el-icon-zoom-out"></i> to zoom out the linear genome
              view. And there is also a slider bar to zoom in and out.
            </li>
          </ul>
          <div class="helpImg">
            <img src="../assets/help/track02.png" alt="Track help" />
          </div>
          <p>
            There is a drag handle on the track labels displayed with six dots,
            clicking and dragging on this part of the track label can reorder
            tracks. There is also a menu displayed with three dots. By clicking
            on the this part of the track label can reset the display style of
            the track.
          </p>
          <div class="helpImg">
            <img src="../assets/help/track03.png" alt="Track help" />
          </div>
          <p><strong>Track selector menu</strong></p>
          <p>
            There are 160 available tracks listed in the track selector menu for
            one reference sequence.
          </p>
          <div class="helpImg">
            <img
              src="../assets/help/track04.png"
              alt="Track help"
              style="width: 40%"
            />
          </div>
          <p><strong>Reference</strong></p>
          <p>
            Bules, Robert, et al. JBrowse: a dynamic web platform for genome
            visualization and analysis. Genome Biology 17.1 (2016):66.
          </p>
          <p>
            We embedded Linear Genome View of
            <a href="https://www.jbrowse.org/jb2/" target="_blank">JBrowse 2</a>
            and created our own configuration file to visualize the genome-wide
            data numerized with our <i>k</i>-nucleotide physicochemical property
            values.
          </p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="3. Circos tutorial" name="3">
        <div>
          <p>
            The <i>Circos</i> menu also includes three sub-menus, that is
            <i>Human GRCh38/hg38</i>, <i>Mouse GRCHm39/mm39</i>, and
            <i>SacCer_Apr2011/sacCer3</i>, displaying circular images of three
            different genome assemblies respectively.
          </p>
          <p>
            Users should select parameters including the value k of
            k-nucleotide, one k-nucleotide physicochemical property, start, end
            positions, and resolution for per combination of a chromosome and
            one type of property values. After selecting all the parameters,
            click on the 'Get circos' button to get a circular image. It takes
            some time to load the image due to the time painting the image.
          </p>
          <div class="helpImg">
            <img src="../assets/help/circos01.png" alt="Track help" />
          </div>
          <p><strong>Parameters settings</strong></p>
          <p></p>
          <p><strong>Circular image descriptions</strong></p>
          <p><strong>Reference</strong></p>
          <p>
            Krzywinski, M. et al. Circos: an Information Aesthetic for
            Comparative Genomics. Genome Res (2009) 19:1639-1645
          </p>
          <p>
            We embedded
            <a href="http://circos.ca/" target="_blank">Circos</a> to display
            our sequences in circular layout.
          </p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="4. Download links" name="4">
        <div>
          <p>
            We provided static links to FASTA and bgzip-compressed indexed FASTA
            format files, <i>k</i>-nucleotide physicochemical property values,
            and all source codes.
          </p>
          <div class="helpImg">
            <img src="../assets/help/download01.png" alt="Track help" />
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="5. Data processing" name="5">
        <div>
          <p>wiggle</p>
          <p>bigwig</p>
          <p>Circos核型文件</p>
          <p>Circos数据文件格式</p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="6. Contact" name="6">
        <p>
          For any suggestions, technical issues, data depositions and error
          reports, please contact Dr. Pu-Feng Du by email (<a
            href="mailto:pdu@tju.edu.cn"
            >pdu@tju.edu.cn</a
          >).
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      activeName: "1",
    };
  },
};
</script>

<style scoped lang="less">
.help {
  min-height: calc(100% - 120px);
}

.title {
  height: 80px;
  line-height: 80px;
  font-size: 1.5em;
  text-align: center;
  background: #f5f5dc;
}

.title img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

.content {
  margin: 10px auto;
  padding: 100px 150px;
}

/deep/ .el-collapse-item__header {
  font-size: 18px;
}

/deep/ .el-collapse-item__wrap {
  border-top: 2px solid #a5c2a0;
}

/deep/ .el-collapse-item__content {
  font-size: 16px;
  text-align: justify;
  padding: 20px;
}

.helpImg {
  width: 100%;
  height: auto;
  text-align: center;
}

.helpImg img {
  width: 70%;
  height: auto;
}

ul,
li {
  list-style: disc;
}
</style>
