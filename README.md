tin-flex💫 基于flex的极简框架
====

[![Build Status](https://api.travis-ci.org/zx1988826/tin-flex.svg?branch=master)](https://travis-ci.org/zx1988826/tin-flex)
[![npm version](https://img.shields.io/badge/npm-v1.0.2-blue.svg)](https://www.npmjs.com/package/tin-flex)
[![Gitter](https://badges.gitter.im/weui/weui.svg)](https://gitter.im/tin-flex)

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

#### 4.响应式列,如果你不确定百分比的情况下，你可以直接用 **tin-item** 来自动平均分布flex布局
```html
<div class="tin-flex">
    <div class="tin-item i1">i1</div>
    <div class="tin-item i2">i2</div>
    <div class="tin-item i3">i3</div>
    <div class="tin-item i4">i4</div>
    <div class="tin-item i2">i5</div>
    <div class="tin-item i3">i6</div>
</div>
```
![响应式列](http://ohwq8bodu.bkt.clouddn.com/git/17786751-CE9F-432D-8737-5247C1E7600A.png)

#### 5.自动换行,默认情况下，容器中的flex是不换行的，你可以加上 **tin-flex-wrap** 让它换行
```html
<div class="tin-flex tin-flex-wrap">
    <div class="tin-item tin-item-15 i1">i1</div>
    <div class="tin-item tin-item-25 i2">i2</div>
    <div class="tin-item tin-item-10 i3">i3</div>
    <div class="tin-item tin-item-50 i4">i4</div>
    <div class="tin-item tin-item-50 i4">i4</div>
    <div class="tin-item tin-item-25 i2">i2</div>
</div>
```
![自动换行](http://ohwq8bodu.bkt.clouddn.com/git/09360691-5B1B-41DB-9009-CF54075EA5AE.png)

#### 6.定义个别项目的对齐方式，默认情况下，我们是让容器中部件上下居中的，你可以更改它的对齐方式。使用它的方式非常简单，你只需要记住 right top bottom left 即可。
```html
<div class="tin-flex">
    <div class="tin-item tin-item-25 tin-item-right i1">i1</div>
    <div class="tin-item tin-item-25 tin-item-top i2">i2</div>
    <div class="tin-item tin-item-25 tin-item-bottom i3">i3</div>
    <div class="tin-item tin-item-25 i4">i4</div>
</div>
```
![定义个别项目的对齐方式](http://ohwq8bodu.bkt.clouddn.com/git/D7D6841F-3B0B-4FC1-A626-7765BE2706F4.png)

#### 8.流式布局，如果你偶尔想用到流式布局,那也可以，tin-flex引入了 类似bootstrap的栅格系统，你可以使用它并且不受限。
```html
<div class="container">
    <div class="row">
        <div class="col-1 i1" style="height:100px"></div>
        <div class="col-1 i2" style="height:100px"></div>
        <div class="col-1 i3" style="height:100px"></div>
        <div class="col-1 i4" style="height:100px"></div>
        <div class="col-1 i1" style="height:100px"></div>
        <div class="col-1 i2" style="height:100px"></div>
        <div class="col-1 i3" style="height:100px"></div>
        <div class="col-1 i4" style="height:100px"></div>
        <div class="col-1 i1" style="height:100px"></div>
        <div class="col-1 i2" style="height:100px"></div>
        <div class="col-1 i3" style="height:100px"></div>
        <div class="col-1 i4" style="height:100px"></div>
    </div>
</div>
```
![流式布局](http://ohwq8bodu.bkt.clouddn.com/git/F3E8C0A6-CA62-4B5F-9B69-D711BD63573E.png)

## 扩展
- [loadme 最全的适用于移动端的loading库](https://github.com/zx1988826/loadme/)
- [tin-ui 移动端UI框架](https://github.com/zx1988826/tin-ui/)

## License
The MIT License(http://opensource.org/licenses/MIT)

## 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request，为提升tin-flex体验贡献力量
