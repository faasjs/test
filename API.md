<a name="FuncWarpper"></a>

## FuncWarpper
自动化测试用的云函数实例

**Kind**: global class  
<a name="new_FuncWarpper_new"></a>

### new FuncWarpper(file)
新建流程实例


| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | 文件名，必须是完整文件名，建议使用 require.resolve() 来传入 |

**Example**  
```js
new TestCase(require.resolve('../demo.flow.ts'))
```
