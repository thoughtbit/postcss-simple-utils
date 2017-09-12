# PostCSS Utils [![Build Status][travis-img]][travis]

[PostCSS] plugin to help you create functional fragments quickly via at-rules.

## Syntax

### clearfix
`@utils-clearfix;`

```css
/* before */
.clearfix {
  @utils-clearfix;
}

/* after */
.clearfix {
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: 
}
.clearfix:after {
    clear: both
}
```

### user select
`@utils-user-select [none|text];`

```css
/* before */
.usn {
  @utils-user-select none;
}

/* after */
.usn {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
```