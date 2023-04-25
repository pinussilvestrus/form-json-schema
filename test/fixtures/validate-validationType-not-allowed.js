export const form = {
  type: 'default',
  components: [
    {
      type: 'number',
      key: 'number',
      validate: {
        validationType: 'email'
      }
    }
  ]
};

export const errors = [
  {
    instancePath: '/components/0/validate/validationType',
    schemaPath: '#/properties/components/items/allOf/1/allOf/9/then/properties/validate/properties/validationType/false schema',
    keyword: 'false schema',
    params: {},
    message: 'boolean schema is false'
  },
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/1/allOf/9/if',
    keyword: 'if',
    params: { failingKeyword: 'then' },
    message: 'must match "then" schema'
  }
];