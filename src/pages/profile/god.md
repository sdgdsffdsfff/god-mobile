# God简介

## 概述
God 是一个基于 Node.js 开发的分布式实时监控系统。主要功能为日志收集，深度检索，实时监控与报警。

### 数据收集
通过 nginx 做负载均衡，解析 nginx 日志发送给 god 前台。实时数据存入 redis，非实时数据存入 mongodb，以及 Elasticsearch 中。


### 模块简介

*input*

数据 format 模块，将原始数据转换成我们所需要的 json 数据。

*filter*

数据过滤模块，过滤掉不需要的数据。将实时数据存储到 redis 中。非实时的数据则扔给 output 模块写库。

*output*

存储数据模块。分别将数据存到 mongodb 以及 Elasticsearch 中。