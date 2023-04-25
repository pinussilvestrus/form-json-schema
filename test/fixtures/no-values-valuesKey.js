export const form = {
  type: 'default',
  components: [
    {
      type: 'select',
      key: 'select'
    }
  ]
};

export const errors = [
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/3/then/anyOf/0/required',
    keyword: 'required',
    params: { missingProperty: 'values' },
    message: "must have required property 'values'"
  },
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/3/then/anyOf/1/required',
    keyword: 'required',
    params: { missingProperty: 'valuesKey' },
    message: "must have required property 'valuesKey'"
  },
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/3/then/anyOf',
    keyword: 'anyOf',
    params: {},
    message: 'must match a schema in anyOf'
  },
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/3/if',
    keyword: 'if',
    params: { failingKeyword: 'then' },
    message: 'must match "then" schema'
  }
];