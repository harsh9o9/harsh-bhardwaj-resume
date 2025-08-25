/**
 * Throttle function type
 */
export type ThrottledFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;
