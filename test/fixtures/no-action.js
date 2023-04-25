export const form = {
  type: 'default',
  components: [
    {
      type: 'button'
    }
  ]
};

export const errors = [
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/2/then/required',
    keyword: 'required',
    params: { missingProperty: 'action' },
    message: "must have required property 'action'"
  },
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/0/allOf/2/if',
    keyword: 'if',
    params: { failingKeyword: 'then' },
    message: 'must match "then" schema'
  }
];