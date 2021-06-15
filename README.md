# visgenome

iVisGenome (https://ivisgene.pufengdu.org/) integrated JBrowse (https://jbrowse.org/jb2/) and Circos (http://circos.ca/) to visualize whole-genome sequences (e.g. Human GRCH38/hg38, Mouse GRCm39/mm39, and SacCer_Apr2011/sacCer3). 

## Introduction

我们首先学习了JBrowse和Circos需要的数据文件格式，然后在UCSC下载了我们自己需要的染色体数据文件，然后将基因组序列按照k-mers转换为理化特性值的序列，将值以wiggle文件格式存储在压缩文件中，使用
wigToBigWig工具将wiggle文件转换为bw文件，用来显示tracks，fasta以及二进制索引文件作为assembly。配置文件格式等

Circos需要的文件，配置文件，存储二进制文件，通过读取二进制文件生成Circos需要的数据文件。

We implemented the backend system using JavaScript with node.js script engine and the Express framework. The frontend was implemented using JavaScript with the Vue framework. We developed the project on **Windows10 platform**, using the code editor [Visual Studio Code](https://code.visualstudio.com/).

## Development

If you want to run these codes in the development environment, you should install **Node.js** (https://nodejs.org/en/download) first on your machine. In addition, **Perl** (https://www.perl.org/) is needed in the project due to the integration of Circos.

After your Node.js environment and Perl are ready, find out the location of the source code of iVisGenome that you unpack, run ``npm install`` in both visgenome-frontend and visgenome-backend directories.

### Install Perl modules on windows

- Install Strawberry Perl, which have package managers that help you install, update and remove modules.
- Find out the location of the source code of iVisGenome that you unpack, enter this directory, and run commands ``cd visgenome-backend/public/circos/circos-0.69-9/bin`` and ``./circos -module`` to check whether the required modules are installed.
- Open perl command line to install missing modules (e.g. cpan Carp Clone).

### Please note

- To learn more about Perl in Circos, you can visit [perl
_and_modules](http://circos.ca/documentation/tutorials/configuration/perl_and_modules/)
- If an error occurs during use, please check if Perl has been configured in your **PATH**. 

## Production

If you want to deploy the project to your own server when there are no problems in the development environment, you would need to excute `npm run build` in the visgenome-frontend directory to get the `dist` folder firstly. And then configure the running environment on the server. 

### Steps for production

### Please note

## Description of the data files in the project
