import fs from 'fs'
import path from 'path'
import tape from 'tape'

import plugin from '..'

const features = [
  'clearfix',
  'clear',
  'user-select',
  'ellipsis',
  'text-hide',
  'wrap',
  'nowrap',
  'hr',
  'irt',
  'disabled',
  'vertical-center',
  'select-no-appearance',
  'triangle',
];

features.forEach((name) => {
  const featurePath = path.join('src', '__tests__', 'features');
  const inputCSS = fs.readFileSync(path.join(featurePath, name + '.css'), 'utf8');

  tape(name, (t) => {
    plugin.process(inputCSS).then((result) => {
      const actualCSS = result.css;
      const expectedCSS = fs.readFileSync(path.join(featurePath, name + '.expected.css'), 'utf8');

      fs.writeFileSync(path.join(featurePath, name + '.actual.css'), actualCSS);

      t.equal(actualCSS, expectedCSS);
      t.end();
    }).catch((err) => {
      console.error(err);
    });
  });
});
