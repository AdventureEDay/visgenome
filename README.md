# visgenome

iVisGenome (https://ivisgene.pufengdu.org/) integrated JBrowse (https://jbrowse.org/jb2/) and Circos (http://circos.ca/) to visualize whole-genome sequences (e.g. Human GRCH38/hg38, Mouse GRCm39/mm39, and SacCer_Apr2011/sacCer3). 

## Introduction

In order to visualize the whole-genome sequences, we first download the sequence assemblies by chromosome from [UCSC](https://hgdownload.soe.ucsc.edu/downloads.html). We selected the most recent versions of three genome assemblies, hg38, mm39, and sacCer3, for our web server.

We learned the input, output, and configuration file formats of JBrowse and Circos, and then preprocessed the genome assemblies to meet the requirements of whole-genome visualization of iVisGenome. Descriptions of the files are in [Description of the data files in the project](#description-of-the-data-files-in-the-project).

We implemented the backend system using JavaScript with node.js script engine and the Express framework. The frontend was implemented using JavaScript with the Vue framework. We developed the project on **Windows10 platform**, using the code editor [Visual Studio Code](https://code.visualstudio.com/).

## Development

If you want to run these codes in the development environment, you should install **Node.js** (https://nodejs.org/en/download) first on your machine. In addition, **Perl** (https://www.perl.org/) is needed in the project due to the integration of Circos.

After your Node.js environment and Perl are ready, find out the location of the source code of iVisGenome that you unpack, run `npm install` in both visgenome-frontend and visgenome-backend directories.

### Install Perl modules on windows

1. Install Strawberry Perl, which have package managers that help you install, update and remove modules.
2. Find out the location of the source code of iVisGenome that you unpack, enter this directory, and run commands `cd visgenome-backend/public/circos/circos-0.69-9/bin` and ``./circos -module`` to check whether the required modules are installed.
3. Open perl command line to install missing modules (e.g. cpan Carp Clone).

### Please note

- To learn more about Perl in Circos, you can visit [perl
_and_modules](http://circos.ca/documentation/tutorials/configuration/perl_and_modules/)
- If an error occurs during use, please check if Perl has been configured in your **PATH**. 

## Production

If you want to deploy the project to your own server when there are no problems in the development environment, you would need to excute `npm run build` in the visgenome-frontend directory to get the `dist` folder firstly. And then configure the running environment on the server. 

### Steps for production

1. Install **Node.js**  and **Perl** on the server.
2. Upload `visgenome-backend` to the server.
3. Upload the files in `dist` folder to the `public` folder in `visgenome-backend`.
4. Install missing perl modules.
5. Execute the command `npm install` to install all the dependencies in the `visgenome-backend` directory.
6. Install and configure **Nginx**.
7. You can install [**PM2**](https://pm2.keymetrics.io/docs/usage/quick-start/) to manager your node process. 
8. Type and execute the command `pm2 start www` in the `visgenome-backend/bin` folder to start the project.

### Please note

- The backend listens on port 3000, which is configured in `www` file in `visgnenome-backend/bin`.
- If the program does not start properly, please running commands `pm2 list` and `pm2 show 0` (where 0 represents the process id) to view error messages.
- Execute the command `pm2 stop www` to stop the server, and `pm2 restart www` to restart the server.

## Description of the data files in the project

### For linear tracks module

We need bgzip-compressed FASTA (.fa.gz) and bgzip-compressed indexed FASTA (.fa.gz.fai and .fa.gz.gzi) format files of a genome sequence data by chromosome. These files are for the reference sequence tracks, which are configured in the "assemblies" option of the configuration file. We aslo need a bigWig format file (.bw) for each available track. We name the confguration file as `config_'the name of a chromosome'_'ori/sta'.json`, for example, `config_chr1_sta.json`.

To get bgzip-compressed indexed FASTA format files, we downloaded and installed a bioinformatics tool, [samtools](https://www.htslib.org/). Suppose that our FASTA file is example.fa, we can get the following 3 files by using command `bgzip -i example.fa` and command `samtools faidx example.fa.gz`: `example.fa.gz`, `example.fa.gz.gzi`, and `example.fa.gz.fai`.

To get bigWig track files, we converted the chromosome sequences into a series of physicochemical property values of *k*-tuple nucleotides and saved the values in Wiggle format. To save each value after the conversion, we selected fixedStep-format wig file that begins with a declaration line and is followed by a single column of sequence values. Finally, we used a standalone command-line utility, [wigToBigWig](http://hgdownload.soe.ucsc.edu/admin/exe/), to generate bigWig format files. For example, if there is a file named `track.wig`, users can run the command `wigToBigWig track.wig genome.chrom.sizes.txt track.bw` to create the `track.bw` file, where `genome.chrom.sizes.txt` is a file listing the size of chromosomes of the genome assembly which you are working (e.g., hg38, mm39, and saccer3).

### For circular image module

To implement this module, we took the advantage of the features of Circos to generate a circular image displaying sequence values of the selected interval from a chromosome. Circos is a command-line software package for visualizing a wide variety of data, as long as the data format meets its requirements. The circular image generation process is driven by a configuration file in which users can configure karyotype file, overall ideogram, plots, data files, and so on.

The karyotype file defines the axes of plots, and each axis of axes is defined by identifier referenced in data files, label, size (start position and end position), and color. In iVisGenome, the karyotype file is used to define chromosomes, each chromosome of which is formatted as `chr - id label start end color` (e.g. chr - hs1 chr1 0 248956422 chr1). To keep up with the file format in the linear tracks module, the first position of a chromosome is "1" in the bigWig file, the start value "0" is set as a placeholder in the karyotype file. The `chr` and `-` fields indicate that the line defines a chromosome, the `id` field is the identifier referenced in the data files, the `label` field is the text tag for the ideogram seen in the circular image, the `start` and `end` fields define the size of the entire chromosome region, and the color filed defines what color will fill the ideogram. Colors are named chr1, chr2, … chrx, chry, and chrun for convenience.

After learning the track types Circos can display, we used line tracks to visualize our property values. Line tracks are 2D data tracks that associate a value with a genomic position. The data file is configured in plots block of configuration file and is formatted as `id start end value` (e.g. hs1 10000000 10000000 0.338). The start value is equal to the end value indicating one position value, otherwise, it is an interval value.

### Please note
- Learn more about samtools: [https://www.htslib.org/](https://www.htslib.org/)
- Wiggle format file: [http://genome.ucsc.edu/goldenPath/help/wiggle.html](http://genome.ucsc.edu/goldenPath/help/wiggle.html)
- bigWig format file: [http://genome.ucsc.edu/goldenPath/help/bigWig.html](http://genome.ucsc.edu/goldenPath/help/bigWig.html)
- Circos tutorials: [http://circos.ca/documentation/tutorials/]( http://circos.ca/documentation/tutorials/)
