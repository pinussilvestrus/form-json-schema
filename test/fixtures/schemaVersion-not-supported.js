export const form = {
  type: 'default',
  components: [],
  schemaVersion: 12
};

export const errors = [
  {
    instancePath: '/schemaVersion',
    schemaPath: '#/properties/schemaVersion/maximum',
    keyword: 'maximum',
    params: { comparison: '<=', limit: 11 },
    message: 'must be <= 11'
  }
];