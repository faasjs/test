<a name="FuncWarpper"></a>

## FuncWarpper
自动化测试用的云函数实例

**Kind**: global class  

* [FuncWarpper](#FuncWarpper)
    * [new FuncWarpper(file)](#new_FuncWarpper_new)
    * [.handler()](#FuncWarpper+handler)
    * [.mountedHandler(event, [context])](#FuncWarpper+mountedHandler)

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

### funcWarpper.handler()
生成接口

**Kind**: instance method of [<code>FuncWarpper</code>](#FuncWarpper)  
<a name="FuncWarpper+mountedHandler"></a>

### funcWarpper.mountedHandler(event, [context])
生成实例已激活的接口

**Kind**: instance method of [<code>FuncWarpper</code>](#FuncWarpper)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>any</code> | 事件对象 |
| [context] | <code>any</code> | 环境对象 |

