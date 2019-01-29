// 无props下组件外部跳转页面 https://reactnavigation.org/docs/zh-Hans/navigating-without-navigation-prop.html
import { NavigationActions, StackActions } from 'react-navigation';

let _navigator; // eslint-disable-line no-underscore-dangle

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

/*
  @参数
  routeName - String - 必需 - 已在应用程序的路由器中注册的目标路由名称
  params - Object - 可选 - 将参数合并到目标路由中
  action - Object - 可选 - （高级）如果屏幕是导航器，则在子路由器中运行的子操作
  key - * String * -可选-要导航到的路由的标识符。如果已存在, 则导航回此路由
*/
const navigate = (routeName, params, action, key) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
      key,
    })
  );
};
/*
  @参数
  key - string 或 null - 可选 - 如果设置，导航将从给定的 Key 返回。 如果为 null，导航将返回到任何地方。
*/
const back = key => {
  _navigator.dispatch(
    NavigationActions.back({
      key,
    })
  );
};

/*
  @参数
  params - object - 必须 - 新的参数将被合并到现有的路由参数中
  key - string - 必须 - 应该得到新参数的路由 Key。
*/
const setParams = (params, key) => {
  _navigator.dispatch(
    NavigationActions.setParams({
      params,
      key,
    })
  );
};

/*
  @参数
  index - * number * - required routes数组中state的活动路由的索引。
  actions - array - 必需 - 将取代导航状态的导航行为数组。
  key - string or null - 可选 - 如果设置，具有给定 key 的导航器将重置。 如果为null，则根导航器将重置
*/
const reset = (index, actions, key) => {
  _navigator.dispatch(StackActions.reset(index, actions, key));
};

/*
  @参数
  key - string - 被替换的路由的 key，如果未指定，最近的路由将会被替换
  newKey - string - 用于替换路线的 Key。 如果未提供，则自动生成。
  routeName - string - routeName用于替换路由。
  params - object - 要传入替换路由的参数。
  action - object - 可选的子动作。
  immediate* - boolean - 目前没有效果, 这是 stack navigator 支持动画替换（它目前不支持）的占位符。
*/
const replace = (key, newKey, routeName, params, action, immediate) => {
  _navigator.dispatch(StackActions.replace(key, newKey, routeName, params, action, immediate));
};

/*
  @参数
  routeName - string - routeName用于替换路由。
  params - object - 将合并到目标路由的参数（通过this.props.navigation.state.params在目标路由获取）。
  action - Object - 可选 - （高级）如果页面是 navigator，则是在子路由器中运行的子操作。
*/
const push = (routeName, params, action) => {
  _navigator.dispatch(StackActions.push(routeName, params, action));
};

/*
  @参数
  n - number - 返回的层数
*/
const pop = n => {
  _navigator.dispatch(StackActions.pop(n));
};

/*
  @参数
*/
const popToTop = () => {
  _navigator.dispatch(StackActions.popToTop());
};

// add other navigation functions that you need and export them
export default {
  navigate,
  back,
  setParams,
  reset,
  replace,
  push,
  pop,
  popToTop,
  setTopLevelNavigator,
};
