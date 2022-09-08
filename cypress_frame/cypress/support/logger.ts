import {createLogger, format, transports} from 'winston'

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};
const alignedWithColorsAndTime = format.combine(
  // format.colorize(), /* json format is not compatible with colors, without json - context are not working */
  format.timestamp(),
  format.align(),
  format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  format.json()
);
export const logger = createLogger({
  level: 'info', /* Set the leve here */
  transports: [new transports.Console()],
  format: alignedWithColorsAndTime,
  defaultMeta: {
    tests: 'Cypress tests'
  },
  // Cypress doesn't know about fs module, he runs code in browser :|
  // exceptionHandlers: [new transports.File({ filename: "logs/exceptions.log" })],
  // rejectionHandlers: [new transports.File({ filename: "logs/rejections.log" })]
})
