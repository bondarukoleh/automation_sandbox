import {createLogger, format, transports} from 'winston'

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

export const logger = createLogger({
  levels: logLevels,
  transports: [new transports.Console()],
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: {
    tests: 'Cypress tests'
  },
  // Cypress doesn't know about fs module, he runs code in browser :|
  // exceptionHandlers: [new transports.File({ filename: "logs/exceptions.log" })],
  // rejectionHandlers: [new transports.File({ filename: "logs/rejections.log" })]
})
