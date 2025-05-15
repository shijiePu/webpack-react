# webpack-react

组件：
    表单 Form & FormItem

hook：
    延时hooks useDelayedValue(value, delay)

路由鉴权
登录滑动验证


# polp工具



# 依赖包有涉及到修改
onFilter 方法只能过滤第一层数据，不能过滤 children 中的数据，导致在树形表格的场景中，onFilter 不能满足需求
在过滤逻辑中增加递归的处理逻辑

table 支持过滤children
changed file1: node_modules/antd/es/table/hooks/useFilter/index.js

```js
export function getFilterData(data, filterStates, childrenColumnName) {
  console.log('getFilterData', { data, filterStates, childrenColumnName });
  return filterStates.reduce(function (currentData, filterState) {
    var _filterState$column = filterState.column,
      onFilter = _filterState$column.onFilter,
      filters = _filterState$column.filters,
      filteredKeys = filterState.filteredKeys;
    if (onFilter && filteredKeys && filteredKeys.length) {
      return (
        currentData
          // shallow copy
          .map((record) => ({ ...record }))
          .filter((record) =>
            filteredKeys.some((key) => {
              const keys = flattenKeys(filters);
              const keyIndex = keys.findIndex((k) => String(k) === String(key));
              const realKey = keyIndex !== -1 ? keys[keyIndex] : key;
              // filter children
              if (record[childrenColumnName]) {
                record[childrenColumnName] = getFilterData(
                  record[childrenColumnName],
                  filterStates,
                  childrenColumnName,
                );
              }

              return onFilter(realKey, record);
            }),
          )
      );
    }
    return currentData;
  }, data);
}
```

changed file2: node_modules/antd/es/table/Table.js
所有getFilterData添加一个参数 childrenColumnName
```js
  getFilterData(agr1,ag2) =>  getFilterData(agr1,ag2,childrenColumnName) 
```
