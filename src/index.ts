import Logger from '@faasjs/logger';
import { Func, ExportedHandler } from '@faasjs/func';
import { loadConfig } from '@faasjs/load';

/**
 * 自动化测试用的云函数实例
 */
export class FuncWarpper {
  public file: string;
  public stagging: string;
  public logger: Logger;
  public func: Func;
  public config: any;
  public plugins: any[];
  public handler: ExportedHandler;

  /**
   * 新建流程实例
   * @param file {string} 文件名，必须是完整文件名，建议使用 require.resolve() 来传入
   * @example new TestCase(require.resolve('../demo.flow.ts'))
   */
  constructor (file: string) {
    this.file = file;
    this.stagging = process.env.FaasEnv || 'testing';
    this.logger = new Logger('TestCase');

    this.logger.info('Func: [%s] %s', this.stagging, this.file);
    // eslint-disable-next-line security/detect-non-literal-require
    this.func = require(this.file).default;
    this.func.config = loadConfig(process.cwd(), this.file)[this.stagging];
    this.config = this.func.config;
    this.plugins = this.func.plugins;
    this.handler = this.func.export().handler;
  }

  /**
   * 生成实例已激活的接口
   * @param event {any} 事件对象
   * @param context {any=} 环境对象
   */
  public async mountedHandler (event: any, context?: any): Promise<ExportedHandler> {
    const handler = this.func.export().handler;

    await this.func.mount({
      event,
      context
    });

    return handler;
  }
}
