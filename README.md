> 🚧 🚧 🚧 

# form-json-schema

[![Build Status](https://img.shields.io/github/actions/workflow/status/pinussilvestrus/form-json-schema/CI.yml?branch=main)](https://github.com/pinussilvestrus/form-json-schema/actions?query=workflow%3ACI)



JSON Schema for [form-js](https://github.com/bpmn-io/form-js). The schema is built on top of and validated by [`json-schema@draft-07`](https://json-schema.org/draft-07/json-schema-release-notes.html).


## Usage

Set the `$schema` attribute to reference the [JSON Schema definition](./resources/schema.json).

```js
{
  "$schema": "https://unpkg.com/form-json-schema/resources/schema.json",
  "type": "default",
  "schemaVersion": 11,
  "components": []
}
```

You can also use a specific version.

```js
"$schema": "https://unpkg.com/form-json-schema@0.2.0/resources/schema.json"
```

## Build and Run

Prepare the project by installing all dependencies:

```sh
npm install
```

Bundle [the source schema files](./src) together

```sh
npm run build
```

Execute the following command to run the generated schema against the tests

```sh
npm run test
```

## License

MIT

