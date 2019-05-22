import Logger from '@faasjs/logger';
import { loadConfig, loadResource } from '@faasjs/load';
import Flow from '@faasjs/flow';

/**
 * 自动化测试用的流程实例
 */
class FlowWarpper {
  public file: string;
  public stagging: string;
  public logger: Logger;
  public providers: any;
  public flow: Flow;

  /**
   * 新建流程实例
   * @param file {string} 文件名，必须是完整文件名，建议使用 require.resolve() 来传入
   * @example new TestCase(require.resolve('../demo.flow.ts'))
   */
  constructor (file: string) {
    this.file = file;
    this.stagging = process.env.FaasEnv || 'local';
    this.logger = new Logger('TestCase');

    this.logger.info('Flow: [%s] %s', this.stagging, this.file);
    this.providers = loadConfig(process.cwd() + '/', this.file, this.stagging);
    // eslint-disable-next-line security/detect-non-literal-require
    this.flow = require(this.file).default;

    // 解析配置项
    loadResource({
      function: this.flow.config.resource
    }, this.providers);
    loadResource(this.flow.config.triggers || {}, this.providers);
    loadResource(this.flow.config.resources || {}, this.providers);
  }

  public createTrigger (key?: string | number) {
    return this.flow.createTrigger(key);
  }
}

export {
  FlowWarpper
};
