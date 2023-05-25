import { jest } from '@jest/globals';

global.jest = jest;

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserver;