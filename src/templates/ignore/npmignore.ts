import { tpl_engine_init } from '@omni-door/utils';

const tpl = 
`\`
.idea
.DS_Store
*~
~*

build
src
*test*
node_modules
.omni_cache
.storybook
.docz
demo
server

# config files
.eslintignore
.eslintrc.js
.gitignore
*.config.js
*.conf.js
tsconfig.json

_config.yml
.nyc_output
.travis.yml
coverage
.nycrc
mocha.opts
doczrc.js

yarn.lock
package-lock.json

# log files
*.log
*.log.*
\``;

export default tpl_engine_init({
  tpl 
}, 'tpl');