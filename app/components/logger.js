/* eslint-disable no-console */
// @flow

export class Logger {
    _area: string;
    _applicationPrefix = 'logger';

    constructor(area: string) {
        this._area = area;
    }

    // eslint-disable-next-line flowtype/no-weak-types
    info(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.info(this._format(message));
        } else {
            console.info(this._format(''), message);
            console.info(message);
        }
    }

    // eslint-disable-next-line flowtype/no-weak-types
    warn(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.warn(this._format(message));
        } else {
            console.warn(this._format(''), message);
        }
    }

    // eslint-disable-next-line flowtype/no-weak-types
    debug(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.debug(this._format(message));
        } else {
            console.debug(this._format(''), message);
        }
    }

    // eslint-disable-next-line flowtype/no-weak-types
    assert(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.warn(this._formatAssert(message));
        } else {
            console.warn(this._formatAssert(''), message);
        }
    }

    // eslint-disable-next-line flowtype/no-weak-types
    _format(message: any): string {
        return `${this._applicationPrefix} ${new Date().toISOString()} ${this._area}: ${message}`;
    }

    // eslint-disable-next-line flowtype/no-weak-types
    _formatAssert(message: any): string {
        return `ASSERT ${this._applicationPrefix} ${new Date().toISOString()} ${this._area}: ${message}`;
    }
}

