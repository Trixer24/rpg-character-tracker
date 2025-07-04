export class AppError extends Error {
  constructor(message, code = 'UNKNOWN_ERROR', context = {}) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.context = context;
    this.timestamp = new Date().toISOString();
  }
}

export const ERROR_CODES = {
  STORAGE_ERROR: 'STORAGE_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  IMPORT_ERROR: 'IMPORT_ERROR',
  EXPORT_ERROR: 'EXPORT_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  INVALID_DATA: 'INVALID_DATA'
};

export const logError = (error, context = {}) => {
  const errorLog = {
    message: error.message,
    stack: error.stack,
    code: error.code || 'UNKNOWN_ERROR',
    context,
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A'
  };
  console.error('App Error:', errorLog);
};