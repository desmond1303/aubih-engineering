import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sub-navigation/item', 'Integration | Component | sub navigation/item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sub-navigation/item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sub-navigation/item}}
      template block text
    {{/sub-navigation/item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
