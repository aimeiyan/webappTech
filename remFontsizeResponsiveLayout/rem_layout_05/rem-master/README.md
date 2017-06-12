# rem
rem是em的升级版，rem只会相对html的值，不会受到父级的影响。

因为rem是相对html的，那么只要将html选择器设置一个绝对大小的值：比如在html选择器设置font-size：16px；那么所有元素都是要基于rem，用1rem=16px换算。通过js来切换html的font-size值比直接用media切换过渡更平滑。

此实例是参考设计稿宽度为640px计算的，所有的rem计算都是除以16

如果设计稿宽度是750px，所有的rem计算应该是除以 18.75((750/640)*16);


此实例与simple-mobile-rem-master实例相同