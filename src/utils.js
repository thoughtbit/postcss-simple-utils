import toArray from 'lodash.toarray'

export default {
  /* 文字溢出显示省略号 */
  ellipsis(rows) {
    let rules = {
      'display': 'block',
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
    };

    if (rows && rows > 1) {
      rules['display'] = '-webkit-box';
      rules['-webkit-box-orient'] = 'vertical';
      rules['-webkit-line-clamp'] = rows;
    } else {
      rules['white-space'] = 'nowrap';
      rules['word-wrap'] = 'normal';
    }

    return rules;
  },
  /* 清除浮动 */
  clearfix() {
    return {
      '&:before, &:after': {
        'display': 'table',
        'content': '""',
      },
      '&:after': {
        'clear': 'both',
        'visibility': 'hidden',
        'font-size': 0,
        'height': 0,
      },
    };
  },
  /* 清除浮动 */
  clear() {
    return {
      clear: 'both',
      display: 'block',
      height: '0',
      overflow: 'hidden',
      visibility: 'hidden',
      width: '0',
    };
  },
  userSelect(value) {
    return {
      '-moz-user-select': value,
      '-webkit-user-select': value,
      '-ms-user-select': value,
    };
  },
  /* 隐藏文字 */
  irt() {
    return {
      'font': '0/0 none',
      'text-shadow': 'none',
      'color': 'transparent',
    };
  },
  /* 隐藏文字 */
  textHide() {
    return {
      'text-indent': '100%',
      'white-space': 'nowrap',
      'overflow': 'hidden',
    };
  },
  /* 禁用 */
  disabled(bgc, bdc, color) {
    return {
      'background-color': bgc,
      'border-color': bdc,
      'color': color,
      'cursor': 'default',
      'pointer-events': 'none',
    };
  },
  /* 垂直居中 */
  verticalCenter() {
    return {
      '&:after': {
        'display': 'inline-block',
        'content': '""',
        'height': '100%',
        'vertical-align': 'middle',
      },
    };
  },
  /* 隐藏<select>元素的下拉箭头 */
  selectNoAppearance() {
    return {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      'appearance': 'none',
      'text-overflow': '""',
      'text-indent': '.01px',
    };
  },
  /* 连续字符换行 */
  wrap() {
    return {
      'white-space': 'normal',
      'word-wrap': 'break-word',
      'word-break': 'break-all',
    };
  },
  /* 连续字符不换行 */
  nowrap() {
    return {
      'white-space': 'nowrap',
      'word-wrap': 'normal',
    };
  },
  /* 模拟细线 */
  hr() {
    return {
      'clear': 'both',
      'display': 'block',
      'overflow': 'hidden',
      'height': '0',
      'font-size': '0',
      'border-bottom': '1px solid #cdcdcd',
    };
  },
  /* CSS 三角形， http://apps.eky.hk/css-triangle-generator/ */
  triangle(type = 'iso', direction = 'bottom', color = '#000', width = 20, height = 10) {
    const size = [5, 5];
    const colorDirection = {
      'top': 'bottom',
      'right': 'left',
      'bottom': 'top',
      'left': 'right',
      'topRight': 'right',
      'bottomRight': 'bottom',
      'bottomLeft': 'left',
      'topLeft': 'top',
    };
    const lengthDirection = {
      'top': {
        'top': false,
        'right': 'width-right',
        'bottom': 'height',
        'left': 'width-left',
      },
      'right': {
        'top': 'height-top',
        'right': false,
        'bottom': 'height-bottom',
        'left': 'width',
      },
      'bottom': {
        'top': 'height',
        'right': 'width-right',
        'bottom': false,
        'left': 'width-left',
      },
      'left': {
        'top': 'height-top',
        'right': 'width',
        'bottom': 'height-bottom',
        'left': false,
      },
      'topRight': {
        'top': false,
        'right': 'width',
        'bottom': 'height',
        'left': false,
      },
      'bottomRight': {
        'top': false,
        'right': false,
        'bottom': 'height',
        'left': 'width',
      },
      'bottomLeft': {
        'top': 'height',
        'right': false,
        'bottom': false,
        'left': 'width',
      },
      'topLeft': {
        'top': 'height',
        'right': 'width',
        'bottom': false,
        'left': false,
      },
    };
    let colors = {
      'top': 'transparent',
      'right': 'transparent',
      'bottom': 'transparent',
      'left': 'transparent',
    };
    let lengths = {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0,
    };
    let rules = {
      'width': '0',
      'height': '0',
      'border-style': 'solid',
    };

    let lengthDirections = lengthDirection[direction];
    let colorDirections = colorDirection[direction];
    colors[colorDirections] = color;
    for(let key in lengthDirections){
			if (lengthDirections[key] === false){
				lengths[key] = '0';
			} else {
        switch(type){
          /* 全等三角形 */
					case 'equ':
						if(direction == 'top' || direction == 'bottom'){
							let equHeight = (Math.sqrt(3)/2*width).toFixed(1);
							switch(lengthDirections[key]){
								case 'width':
									lengths[key] = equHeight+'px';
									break;
								case 'height':
									lengths[key] = equHeight+'px';
									break;
								case 'width-left':
									lengths[key] = `${width/2}px`;
									break;
								case 'width-right':
									lengths[key] = `${width/2}px`;
									break;
							}
						}else if(direction == 'left' || direction == 'right'){
							let equHeight = (Math.sqrt(3)/2*height).toFixed(1);
							switch(lengthDirections[key]){
								case 'width':
									lengths[key] = equHeight+'px';
									break;
								case 'height':
									lengths[key] = equHeight+'px';
									break;
								case 'height-top':
									lengths[key] = `${height/2}px`;
									break;
								case 'height-bottom':
									lengths[key] = `${height/2}px`;
									break;
							}
						}
            break;
          /* 等边三角形 */
					case 'iso':
						switch(lengthDirections[key]){
							case 'width':
								lengths[key] = `${width}px`;
								break;
							case 'height':
								lengths[key] = `${height}px`;
								break;
							case 'width-left':
								lengths[key] = `${width/2}px`;
								break;
							case 'width-right':
								lengths[key] = `${width/2}px`;
								break;
							case 'height-top':
								lengths[key] = `${height/2}px`;
								break;
							case 'height-bottom':
								lengths[key] = `${height/2}px`;
								break;
						}
            break;
          /* 不等边三角形 */
					case 'sca':
						switch(lengthDirections[key]){
							case 'width':
								lengths[key] = `${width}px`;
								break;
							case 'height':
								lengths[key] = `${height}px`;
								break;
							case 'width-left':
								lengths[key] = `${size[0]}px`;
								break;
							case 'width-right':
								lengths[key] = `${size[1]}px`;
								break;
							case 'height-top':
								lengths[key] = `${size[0]}px`;
								break;
							case 'height-bottom':
								lengths[key] = `${size[1]}px`;
								break;
						}
						break;
				}
      }
    }

    colors = toArray(colors).join(' ');
    lengths = toArray(lengths).join(' ');
    rules['border-width'] = lengths;
    rules['border-color'] = colors;

    return rules;
  },
};
