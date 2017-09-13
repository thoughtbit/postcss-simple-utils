# PostCSS Simple Utils

[PostCSS] plugin to help you create functional fragments quickly via at-rules.

## Syntax

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
    content: 
}
.clearfix:after {
    clear: both
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
