import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    coverageReporters: ["clover", "json", ["text", { file: 'coverage.txt' }]]
};

export default config;
