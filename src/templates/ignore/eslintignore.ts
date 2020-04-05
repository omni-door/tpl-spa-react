import { tpl_engine_init } from '@omni-door/utils';

const tpl = 
`\`
build/
configs/
es/
lib/
dist/
server/
demo/
node_modules/
.docz/
.storybook/
.out/
**/__test__/
**/__stories__/

doczrc.js
.eslintrc.js
*.config.js
*.conf.js
\``;

export default tpl_engine_init({
  tpl 
}, 'tpl');