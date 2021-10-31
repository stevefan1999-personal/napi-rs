window.BENCHMARK_DATA = {
  lastUpdate: 1635703136768,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '05a669d652adb17b6edd09e35ea8cb9089544cb9',
          message: 'chore: fix debian.Dockerfile',
          timestamp: '2021-11-01T01:54:36+08:00',
          tree_id: 'efc591b568f1ebb0a3c24d59d5c799106755cc46',
          url: 'https://github.com/napi-rs/napi-rs/commit/05a669d652adb17b6edd09e35ea8cb9089544cb9',
        },
        date: 1635703135684,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 53739014,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 715321871,
            range: '±0.13%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 17536894,
            range: '±0.23%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 713171115,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 364745,
            range: '±9.31%',
            unit: 'ops/sec',
            extra: '71 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 2551207,
            range: '±2.48%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 35604,
            range: '±0.37%',
            unit: 'ops/sec',
            extra: '95 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7926,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7913,
            range: '±0.1%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 17583,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 10283,
            range: '±0.03%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12043,
            range: '±0.1%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 381671,
            range: '±5.22%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 339812,
            range: '±5.34%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 339453,
            range: '±5.01%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 320434,
            range: '±5.21%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 40558,
            range: '±0.95%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 292,
            range: '±3.89%',
            unit: 'ops/sec',
            extra: '58 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 29548,
            range: '±0.45%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Query#query * 100',
            value: 2200,
            range: '±2.26%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Query#query * 1',
            value: 30055,
            range: '±1.92%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
        ],
      },
    ],
  },
}
