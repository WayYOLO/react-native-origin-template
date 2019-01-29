### 关键词 
redux dva dva-core dva-loading dva-immer redux-logger

### 导读
对于一个react项目，是否需要使用redux，其实一直存在争议，redux的使用会带来大量麻烦的数据流处理器代码和一些数据时效性问题。本质上加大了工作量。但是它带来的好处更是胜于劣势，redux带来的优势，跨组件传播状态、增长了数据时效性、记录下了数据变化、规范了数据流代码统一性梳理性强。至于选择dva主要是简化了普通redux架构的繁琐，并提供了像dva-loading dva-immer这样好用插件

关于dva-loading，app中异步操作(处理后台接口和本地存储等)需要loading状态来阻止用户操作，避免用户误操作。统一在redux中使用loading状态可以避免一下业务中的重复代码。

关于dva-immer，数据的全新性是redux中reducer的特性。特别是数据比较复杂层次比较深时reducer需要大量的深拷贝代码。使用dva-immer可以简化这点

### 说明
相关文档：
- [Dva官网](https://dvajs.com/)
- [dva-immer](https://github.com/dvajs/dva/pull/1595)
