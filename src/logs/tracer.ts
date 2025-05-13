import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { TypeormInstrumentation } from 'opentelemetry-instrumentation-typeorm';

// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

enum CompressionAlgorithm {
  GZIP = 'gzip',
}

const sdk = new NodeSDK({
  serviceName: 'nestjs-opentelemetry',
  traceExporter: new OTLPTraceExporter({
    url: 'http://localhost:4317',
    compression: CompressionAlgorithm.GZIP,
  }),
  instrumentations: [
    new HttpInstrumentation(),
    new TypeormInstrumentation(),
    new NestInstrumentation(),
  ],
});

process.on('beforeExit', async () => {
  await sdk.shutdown();
});

export default sdk;
