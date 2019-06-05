<a name="FuncWarpper"></a>

## FuncWarpper
自动化测试用的云函数实例

**Kind**: global class  

* [FuncWarpper](#FuncWarpper)
    * [new FuncWarpper(file)](#new_FuncWarpper_new)
    * [.handler(mountData)](#FuncWarpper+handler)

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
<a name="FuncWarpper+handler"></a>

### funcWarpper.handler(mountData)
生成接口

**Kind**: instance method of [<code>FuncWarpper</code>](#FuncWarpper)  

| Param | Type | Description |
| --- | --- | --- |
| mountData | <code>object</code> | 预初始化的 event 对象，默认为空，不进行预初始化 |

