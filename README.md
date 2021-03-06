# PostCSS Simple Utils

[PostCSS] plugin to help you create functional fragments quickly via at-rules.

## Syntax

### ellipsis

`@util ellipsis([rows]);`

```css
/* before */
.ellipsis {
  @utils-ellipsis;
}
.ellipsis2 {
  @utils-ellipsis(3);
}

/* after */
.ellipsis {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.ellipsis2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

### clearfix

`@util clearfix;`

```css
/* before */
.clearfix {
  @util clearfix;
}

/* after */
.clearfix {
}
.clearfix:before, 
.clearfix:after {
  display: table;
  content: ""
}
.clearfix:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0
}

```
### clear

`@util clear;`

```css
/* before */
.clear {
  @util clear;
}

/* after */
.clear {
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  width: 0;
}

```

### image replace text

`@util irt;`

```css
/* before */
.irt {
  @utils-irt;
}

/* after */
.irt {
  font: 0/0 none;
  text-shadow: none;
  color: transparent;
}
```

### user select

`@util user-select([none|text]);`

```css
/* before */
.usn {
  @util user-select(none);
}

/* after */
.usn {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
```

### disabled

`@util disabled([background-color], [border-color], [color]);`

```css
/* before */
.disabled {
  @util disabled(#ccc, #f00, #333);
}

/* after */
.disabled {
  background-color: #ccc;
  border-color: #f00;
  color: #333;
  cursor: default;
  pointer-events: none;
}
```

### center

- `type` 类型  transform[默认值，css3变换] flexbox[flex布局] ie[IE9-]
- `width` 宽度
- `height` 高度

`@util center([type=transform|flexbox|ie], [width], [height]);`

```css
/* before */

/* position + transform */
.center {
  @util center;
}

/* position + margin */
.center-ie {
  @util center('ie8', 200, 280);
}

/* flex */
.center-flex {
  @util center('flexbox');
}

/* after */

/* position + transform */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* position + margin */
.center-ie {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* flex */
.center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### vertical center

`@util vertical-center;`

```css
/* before */
.vam-box {
  @util vertical-center;
}

/* after */
.vam-box {
}
.vam-box:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle
}
```

### center-block

`@util center-block;`

```css
/* before */
.center-block {
  @util center-block;
}

/* after */
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

### hr

`@util hr;`

```css
/* before */
.hr {
  @util hr;
}

/* after */
.hr {
  clear: both;
  display: block;
  overflow: hidden;
  height: 0;
  font-size: 0;
  border-bottom: 1px solid #cdcdcd;
}
```

### text-hide

`@util text-hide;`

```css
/* before */
.text-hide {
  @util text-hide;
}

/* after */
.text-hide {
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
```
### select-no-appearance

`@util select-no-appearance;`

```css
/* before */
.sna {
  @util select-no-appearance;
}

/* after */
.sna {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-overflow: "";
  text-indent: .01px;
}

```

### wrap

`@util wrap;`

```css
/* before */
.wrap { 
  @util wrap;
}

/* after */
.wrap {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}

```

### nowrap

`@util nowrap;`

```css
/* before */
.nowrap {
  @util nowrap;
}

/* after */
.nowrap {
  white-space: nowrap;
  word-wrap: normal;
}
```

### triangle

- `type` 类型  equ[全等三角形] iso[等边三角形] sca[不等边三角形]
- `direction`  方向
- `color` 颜色
- `width` 宽度
- `height` 高度

`@util triangle([type=equ|iso|sca], [direction], [color], [width], [height]);`

```css
/* before */
.arrow {
  @util triangle();
}
.arrow-top {
  @util triangle('iso', 'top', '#f00', 20, 10);
}
.arrow-bottom {
  @util triangle('iso', 'bottom', '#f00', 20, 10);
}
.arrow-left {
  @util triangle('iso', 'left', '#f00', 20, 10);
}
.arrow-right {
  @util triangle('iso', 'right', '#f00', 20, 10);
}
.arrow-top-left {
  @util triangle('iso', 'topLeft', '#f00', 20, 10);
}
.arrow-top-right {
  @util triangle('iso', 'topRight', '#f00', 20, 10);
}
.arrow-bottom-left {
  @util triangle('iso', 'bottomLeft', '#f00', 20, 10);
}
.arrow-bottom-right {
  @util triangle('iso', 'bottomRight', '#f00', 20, 10);
}

/* after */
.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #000 transparent transparent transparent;
}
.arrow-top {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #f00 transparent;
}
.arrow-bottom {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #f00 transparent transparent transparent;
}
.arrow-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 20px 5px 0;
  border-color: transparent #f00 transparent transparent;
}
.arrow-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 20px;
  border-color: transparent transparent transparent #f00;
}
.arrow-top-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 20px 0 0;
  border-color: #f00 transparent transparent transparent;
}
.arrow-top-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 10px 0;
  border-color: transparent #f00 transparent transparent;
}
.arrow-bottom-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 0 20px;
  border-color: transparent transparent transparent #f00;
}
.arrow-bottom-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10px 20px;
  border-color: transparent transparent #f00 transparent;
}
```

 ### rect
 
 `@util rect([width],[height],[background-color]);`

```css
/* before */
.rect-a {
  @util rect(30,50,'#ff0');
}
.rect-b {
  @util rect(30,*,'#ff0');
}
.rect-c {
  @util rect(*,50,'#ff0');
}
.rect-d {
  @util rect(*,*,'#ff0');
}
.rect-e {
  @util rect(30,50,*);
}

/* after */
.rect-a {
  width: 30px;
  height: 50px;
  background-color: #ff0;
}
.rect-b {
  width: 30px;
  background-color: #ff0;
}
.rect-c {
  height: 50px;
  background-color: #ff0;
}
.rect-d {
  background-color: #ff0;
}
.rect-e {
  width: 30px;
  height: 50px;
}

```

### circle

`@util circle([diameter],[radius],[background-color]);`

```css
/* before */
.circle-a {
  @util circle(50, '#ff0');
}
.circle-b {
  @util circle(50, *);
}

/* after */
.circle-a {
  width: 50px;
  height: 50px;
  background-color: #ff0;
  border-radius: 50%;
}
.circle-b {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

```

## 参考
- https://github.com/baiyaaaaa/postcss-utils
- https://github.com/ismamz/postcss-utilities
