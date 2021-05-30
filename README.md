# visgenome

iVisGenome (https://ivisgene.pufengdu.org/) integrated JBrowse (https://jbrowse.org/jb2/) and Circos (http://circos.ca/) to visualize whole-genome sequences (e.g. Human GRCH38/hg38, Mouse GRCm39/mm39, and SacCer_Apr2011/sacCer3). 

## Introduction

我们首先学习了JBrowse和Circos需要的数据文件格式，然后在UCSC下载了我们自己需要的染色体数据文件，然后将基因组序列按照k-mers转换为理化特性值的序列，将值以wiggle文件格式存储在压缩文件中，使用
wigToBigWig工具将wiggle文件转换为bw文件，用来显示tracks，fasta以及二进制索引文件作为assembly。配置文件格式等

Circos需要的文件，配置文件，存储二进制文件，通过读取二进制文件生成Circos需要的数据文件。
## Development

用户开发需要的环境

## Production

用户想要配置到自己的服务器该怎么做

## Description of the data files in the project

介绍文件是如何生成的
JBrowse文件：
配置文件
.fa.gz以及索引二进制文件是如何生成的 samtools工具
wiggle文件格式
wiggle 到 BigWig

Circos文件：
wiggle二进制文件
circos需要的核型文件
circos需要的数据文件
配置文件