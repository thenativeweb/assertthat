'use strict';

const Extension = function (extensionName) {
  this.name = extensionName;
  this.methods = {};

  this.nextedExtensions = {};

  this.addMethod = (name, method) => {
    this.methods[name] = method;

    return this;
  };

  this.addExtension = nestedExtensionName => {
    this.nextedExtensions[nestedExtensionName] = new Extension(nestedExtensionName);
  };

  this.forExtension = nestedExtensionName => this.nextedExtensions[nestedExtensionName];
};

module.exports = Extension;
