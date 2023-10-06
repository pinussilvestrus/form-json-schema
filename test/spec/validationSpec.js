const { expect } = require('chai');

const util = require('util');

const schema = require('../../resources/schema.json');

const errorMessages = require('../../resources/error-messages.json');

const {
  createValidator
} = require('../helpers');

const validator = createValidator(schema, errorMessages);


describe('validation', function() {

  function validateForm(template) {

    const valid = validator(template);

    const errors = validator.errors;

    return {
      valid,
      errors
    };
  }

  function testForm(name, file, only = false) {

    if (!file) {
      file = `../fixtures/${name}.js`;
    }

    (only ? it.only : it)('should validate form - ' + name, async function() {

      // given
      const testDefinition = await import(file);

      const {
        errors: expectedErrors,
        form
      } = testDefinition;

      // when
      const {
        errors
      } = validateForm(form);

      // then
      expect(errors).to.eql(expectedErrors);
    });
  }

  // eslint-disable-next-line no-unused-vars
  function testOnly(name, file) {
    return testForm(name, file, true);
  }


  testForm('simple');


  testForm('complex');


  testForm('groups');


  testForm('schemaVersion-not-supported');


  testForm('expression-properties');


  testForm('increment');


  testForm('no-action');


  describe('rules - required properties', function() {

    testForm('no-subtype');


    testForm('no-key');


    testForm('no-values-property');

  });


  describe('rules - allowed properties', function() {

    testForm('text-not-allowed');


    testForm('label-not-allowed');


    testForm('description-not-allowed');


    testForm('key-not-allowed');


    testForm('disabled-not-allowed');


    testForm('action-not-allowed');


    testForm('source-not-allowed');


    testForm('alt-not-allowed');


    testForm('subtype-not-allowed');


    testForm('dateLabel-not-allowed');


    testForm('disallowPassedDates-not-allowed');


    testForm('timeLabel-not-allowed');


    testForm('timeInterval-not-allowed');


    testForm('use24h-not-allowed');


    testForm('timeSerializingFormat-not-allowed');


    testForm('increment-not-allowed');


    testForm('decimalDigits-not-allowed');


    testForm('serializeToString-not-allowed');


    testForm('searchable-not-allowed');


    testForm('validate-not-allowed');


    testForm('values-not-allowed');


    testForm('valuesKey-not-allowed');


    testForm('valuesExpression-not-allowed');


    testForm('validate-max-not-allowed');


    testForm('validate-min-not-allowed');


    testForm('validate-pattern-not-allowed');


    testForm('validate-validationType-not-allowed');


    testForm('validate-maxLength-not-allowed');


    testForm('validate-minLength-not-allowed');


    testForm('appearance-prefixAdorner-not-allowed');


    testForm('appearance-suffixAdorner-not-allowed');


    testForm('defaultValue-not-allowed');


    testForm('height-not-allowed');


    testForm('showOutline-not-allowed');


    testForm('path-not-allowed');


    testForm('readonly-not-allowed');

  });


  describe('rules - default', function() {

    testForm('layout-not-allowed');


    testForm('properties-not-allowed');


    testForm('conditional-not-allowed');

  });


  describe('rules - defaultValue type', function() {

    testForm('defaultValue-no-boolean');


    testForm('defaultValue-no-string');


    testForm('defaultValue-no-string-or-number');


    testForm('defaultValue-no-array');

  });

});


// helpers /////////////////

// eslint-disable-next-line no-unused-vars
function printNested(object) {
  console.log(util.inspect(object, {
    showHidden: false,
    depth: null,
    colors: true
  }));
}
