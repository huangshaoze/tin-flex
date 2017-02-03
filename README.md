tin-flex💫 基于flex的极简框架
====

[![Build Status](https://travis-ci.org/weui/weui.svg?branch=master)](https://travis-ci.org/weui/weui)
[![npm version](https://img.shields.io/npm/v/weui.svg)](https://www.npmjs.org/package/weui)
[![Gitter](https://badges.gitter.im/weui/weui.svg)](https://gitter.im/weui/weui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## 概述

tin-flex 是基于flex的极简框架，你可以用小巧的它搭建几乎任何的移动端布局

## 文档

#### 1.构建基本的flex布局
```html
<div class="tin-flex">
    <div class="tin-item i1 tin-item-center">i1</div>
    <div class="tin-item i2 tin-item-right">i2</div>
    <div class="tin-item i3">i3</div>
    <div class="tin-item i4">i4</div>
</div>
```
![构建基本的flex布局](http://ohwq8bodu.bkt.clouddn.com/git/id_rsa_2048.png)

#### 2.百分比更改单个列的大小
```html
<div class="tin-flex">
    <div class="tin-item tin-item-15 i1">i1</div>
    <div class="tin-item tin-item-25 i2">i2</div>
    <div class="tin-item tin-item-10 i3">i3</div>
    <div class="tin-item tin-item-50 i4">i4</div>
</div>
```
![百分比更改单个列的大小](http://ohwq8bodu.bkt.clouddn.com/git/AEA71461-63A0-46BD-9AAB-4EFBF7B061BF.png)

#### 3.flex布局中的列偏移
```html
<div class="ins">
    列偏移示例1
</div>
<div class="tin-flex">
    <div class="tin-item tin-item-15 i1">i1</div>
    <div class="tin-item tin-item-25 i2">i2</div>
    <div class="tin-item tin-item-10 i3">i3</div>
    <div class="tin-item tin-item-50 tin-item-first i4">i4</div>
</div>
<div class="ins">
    列偏移示例2
</div>
<div class="tin-flex">
    <div class="tin-item tin-item-10 i3 tin-item-offset-50">i3</div>
</div>
```
![flex布局中的列偏移](http://ohwq8bodu.bkt.clouddn.com/git/C5C0DC64-D9D6-4D99-BDBC-809CE33AF620.png)



## 扩展
- [loadme 最全的适用于移动端的loading库](https://github.com/zx1988826/loadme/)
- [tin-ui 移动端UI框架](https://github.com/zx1988826/tin-ui/)

## License
The MIT License(http://opensource.org/licenses/MIT)

## 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request，为提升tin-flex体验贡献力量
