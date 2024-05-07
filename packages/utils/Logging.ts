export const DEBUG = 'DEBUG';
export const INFO = 'INFO';
export const WARN = 'WARN';
export const ERROR = 'ERROR';

export interface ILoggingOptions {
    namespace?: string;
    debug?: boolean;
    applyStyles?: boolean;
    styles?: { [key: string]: string };
}

export class Logging {
    private namespace: string;
    private applyStyles: boolean;
    private environment: string;

    private styles: { [key: string]: string } = {
        DEBUG: 'display: inline-block; background-color: Blue; color: white; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;',
        INFO: 'display: inline-block; background-color: Green; color: black; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;',
        WARN: 'display: inline-block; background-color: gold; color: black; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;',
        ERROR: 'display: inline-block; background-color: Red; color: black; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;'
    };

    constructor(options?: ILoggingOptions) {
        this.namespace = options?.namespace || 'Default';
        this.applyStyles = options?.applyStyles || false;
        this.environment = 'development';

        if (options?.styles && this.applyStyles) {
            // biome-ignore lint/style/useConst: <explanation>
            for (let key in options.styles) {
                if (this.styles[key]) this.styles[key] = options.styles[key];
            }
        }
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    public log = (key: string, obj: any, ...objs: any[]) => {
        if (this.environment === 'production') return;

        if (this.applyStyles) {
            console.log(`[${new Date().toISOString()}] [${this.namespace}] %c[${key}] ${obj}`, this.styles[key], ...objs);
        } else {
            console.log(`[${new Date().toISOString()}] [${this.namespace}] [${key}] ${obj}`, ...objs);
        }
    };

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    public debug = (obj: any, ...objs: any[]) => this.log(DEBUG, obj, ...objs);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    public info = (obj: any, ...objs: any[]) => this.log(INFO, obj, ...objs);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    public warn = (obj: any, ...objs: any[]) => this.log(WARN, obj, ...objs);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    public error = (obj: any, ...objs: any[]) => this.log(ERROR, obj, ...objs);
}

export default Logging;
