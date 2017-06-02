import Base from 'engineering/routes/base';

export default Base.extend({
  beforeModel: function () {
    this.transitionTo('engineering.index');
  }
});
