/**
 * 1.所有的都要连到这里面 引入过来
 * 2.引过来  要抛出去 new一下再被抛出去
 * 3.全都写好之后  要被index.js引过去  才可以用
 */

import Count from './modules/count';

export default {
    count: new Count()
}
