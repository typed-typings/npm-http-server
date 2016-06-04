
export interface Option {
  /**
   * http headers dictionary.
   */
  headers: Object;
  /**
   * Cache time (max-age) in seconds [3600]. Set to -1 to disable caching.
   */
  cache: number;
  /**
   * Show directory listing [true]
   */
  showDir: boolean;
  /**
   * Display autoIndex [true]
   */
  autoIndex: boolean;
  contentType: string;

  /**
   * Default file extension.
   */
  ext: string;

  /**
   * Root directory.
   */
  root: string;

  /**
   * Logging function
   */
  logFn(req, res, error): void;

  /**
   * Enable CORS
   */
  cors: boolean;

  /**
   * CORS headers list separated by commas
   */
  corsHeaders: string;

  /**
   * Response to robot.
   */
  robots: boolean | string;

  /**
   * Fallback proxy url.
   */
  proxy: string | Function;

  /**
   * Enable heeps
   */
  https: boolean;
}

/**
 * HttpServer class which is responsible for serving static files along with other HTTP-related features.
 */
export class HttpServer {
  constructor (options?: Option);

  listen(port?: number): void;

  close(): void;
  
  server: any;
}

/**
 * Create a new instance of HttpServer with the specified options.
 */
export function createServer(options?: Option): HttpServer;

/**
 * Provides backwards compatibility for previous case convention of HTTP
 */
export var HTTPServer: typeof HttpServer;
