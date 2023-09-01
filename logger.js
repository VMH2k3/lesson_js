function logger(log, type = 'log') {
    console[type](log);
}
export default logger

export const TYPE_log = 'log'
export const TYPE_warn = 'warn'
export const TYPE_error = 'error'