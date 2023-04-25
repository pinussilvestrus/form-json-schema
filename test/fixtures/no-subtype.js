export const form = {
  type: 'default',
  components: [
    {
      type: 'datetime',
      key: 'date'
    }
  ]
};

export const errors = [
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/1/then/required',
    keyword: 'required',
    params: { missingProperty: 'subtype' },
    message: "must have required property 'subtype'"
  },
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/1/if',
    keyword: 'if',
    params: { failingKeyword: 'then' },
    message: 'must match "then" schema'
  }
];