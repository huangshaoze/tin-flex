tin-flex💫 基于flex的极简框架
====

[![Build Status](https://api.travis-ci.org/zx1988826/tin-flex.svg?branch=master)](https://travis-ci.org/zx1988826/tin-flex)
[![npm version](https://img.shields.io/badge/npm-v2.1.0-blue.svg)](https://www.npmjs.com/package/tin-flex)
[![Gitter](https://badges.gitter.im/weui/weui.svg)](https://gitter.im/tin-flex)

## 概述

tin-flex 是基于flex布局的极简CSS3框架，你可以用小巧的它搭建几乎任何的移动端布局
> 但是注意，tin-flex只注重于布局的样式，并不包含任何其他的样式修饰。

## 文档

#### 1.构建基本的flex布局
你可以通过 **tin-flex** 搭建一个flex容器，通过 **tin-item** 来搭建容器中的部件
> 这里请注意一下有 tin-item-auto 和 没有 tin-item-auto 的区别。它非常重要，默认tin-item部件是平均分布大小的。加了tin-item-auto类后，将自动根据部件内容缩放。

```html
<div class="tin-flex">
    <div class="tin-item i1 tin-item-center">i1</div>
    <div class="tin-item i2 tin-item-right">i2</div>
    <div class="tin-item tin-item-auto i3">i3</div>
    <div class="tin-item tin-item-auto i4">i4</div>
</div>
```
![构建基本的flex布局](http://ohwq8bodu.bkt.clouddn.com/tinflex/ACF5A0F4-8CEC-4901-A763-CF675D7FCE77.png)

#### 2.百分比更改单个列的大小
如果你想自行安排部件 **tin-item** 的大小，可以通过 **tin-item-10** ，**tin-item-20** ，**tin-item-30** ，**tin-item-40** 等来安排部件的大小 。最后的数字，表示部件占据容器的百分比。
```html
<div class="tin-flex">
    <div class="tin-item tin-item-10 i1">i1</div>
    <div class="tin-item tin-item-20 i2">i2</div>
    <div class="tin-item tin-item-10 i3">i3</div>
    <div class="tin-item tin-item-60 i4">i4</div>
</div>
```
![百分比更改单个列的大小](http://ohwq8bodu.bkt.clouddn.com/git/AEA71461-63A0-46BD-9AAB-4EFBF7B061BF.png)

#### 3.flex布局中的列偏移
tin-item-first，tin-item-last，可以用来前置或者后置容器中的部件。tin-item-offset-50 ，用来决定部件的偏移量，具体的百分比你自己决定。
```html
<div class="ins">
    列偏移示例1
</div>
<div class="tin-flex">
    <div class="tin-item tin-item-10 i1">i1</div>
    <div class="tin-item tin-item-30 i2">i2</div>
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

#### 4.自动列
如果你不确定百分比的情况下，你可以直接用 **tin-item 和 tin-item-auto** 来自动根据部件内容分布flex布局
```html
<div class="tin-flex">
    <div class="tin-item i1 tin-item-auto">i1++++</div>
    <div class="tin-item i2 tin-item-auto">i2+</div>
    <div class="tin-item i3 tin-item-auto">i3</div>
    <div class="tin-item i4 tin-item-auto">i4++++++++</div>
    <div class="tin-item i2 tin-item-auto">i5</div>
    <div class="tin-item i3 tin-item-auto">i6</div>
</div>
```
![自动列](http://ohwq8bodu.bkt.clouddn.com/tinflex/D0730B02-242A-4922-A98E-D3AA617BCC62.png)

#### 5.自动换行
默认情况下，容器中的flex是不换行的，你可以加上 **tin-flex-wrap** 让它自动换行
```html
<div class="ins">
    自动换行
</div>
<div class="tin-flex tin-flex-wrap">
    <div class="tin-item tin-item-10 i1">i1</div>
    <div class="tin-item tin-item-20 i2">i2</div>
    <div class="tin-item tin-item-10 i3">i3</div>
    <div class="tin-item tin-item-60 i4">i4</div>
    <div class="tin-item tin-item-50 i4">i4</div>
    <div class="tin-item tin-item-20 i2">i2</div>
</div>
```
![自动换行](http://ohwq8bodu.bkt.clouddn.com/git/09360691-5B1B-41DB-9009-CF54075EA5AE.png)

#### 6.定义个别项目的对齐方式
默认情况下，我们是让容器中部件上下居中的，你可以更改它的对齐方式。使用它的方式非常简单，你只需要记住 right top bottom left 即可。
```html
<div class="tin-flex">
    <div class="tin-item tin-item-20 tin-item-right i1">i1</div>
    <div class="tin-item tin-item-20 tin-item-top i2">i2</div>
    <div class="tin-item tin-item-20 tin-item-bottom i3">i3</div>
    <div class="tin-item tin-item-20 i4">i4</div>
</div>
```
![定义个别项目的对齐方式](http://ohwq8bodu.bkt.clouddn.com/git/D7D6841F-3B0B-4FC1-A626-7765BE2706F4.png)

#### 8.流式布局
如果你偶尔想用到流式布局,那也可以，tin-flex引入了类似bootstrap的栅格系统，你可以灵活使用。我们支持并且鼓励使用更多灵活的技术而不仅仅局限于使用flex。
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
