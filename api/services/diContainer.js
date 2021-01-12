const fnArgs = require("parse-fn-args");

class DiContainer {
  constructor() {
    this.dependencies = {};
    this.factories = {};
  }

  register = (name, dependency) => {
    this.dependencies[name] = dependency;
  };

  factory = (name, factory) => {
    this.factories[name] = factory;
  };

  get = (name) => {
    if (!this.dependencies[name]) {
      const factory = this.factories[name];
      this.dependencies[name] = factory && this.inject(factory);
      if (!this.dependencies[name])
        throw new Error(`Cannot find module ${name}`);
    }

    return this.dependencies[name];
  };

  inject = (factory) => {
    const args = fnArgs(factory).map((dependency) => this.get(dependency));
    return factory.apply(null, args);
  };
}

module.exports = new DiContainer();
