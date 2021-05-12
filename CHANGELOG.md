## [6.0.1](https://github.com/thenativeweb/assertthat/compare/6.0.0...6.0.1) (2021-05-12)


### Bug Fixes

* dispel values before pretty printing. ([#347](https://github.com/thenativeweb/assertthat/issues/347)) ([a5aaa5d](https://github.com/thenativeweb/assertthat/commit/a5aaa5dbec0fa2475553f5ed0e0c7d0ff9a18ab1))

# [6.0.0](https://github.com/thenativeweb/assertthat/compare/5.2.8...6.0.0) (2021-05-06)


### Features

* Rewrite - type-appropriate assertions and better diffs. ([#341](https://github.com/thenativeweb/assertthat/issues/341)) ([f6c430f](https://github.com/thenativeweb/assertthat/commit/f6c430f86fdf2fcbbd3ac949d15910a67303c051))


### BREAKING CHANGES

* Many assertions are now only usable with types they make sense for. This should probably not break much code, but also probably will. Not entirely sure about the repercussions these changes will have.

Some rarely used assertions have been removed (e.g. between).
Some have been added: Support for Results, Maps, Sets and Errors.
Recursions in asserted values are now recognized and in most cases even correctly compared (excluding maps and sets).

Error messages are now much more informational and dare I say beautiful, since the new implementation is based on an in-depth diffing algorithm based on value equality.

## [5.2.8](https://github.com/thenativeweb/assertthat/compare/5.2.7...5.2.8) (2021-03-25)


### Bug Fixes

* bump comparejs from 4.0.6 to 4.0.7 ([#332](https://github.com/thenativeweb/assertthat/issues/332)) ([08b3b60](https://github.com/thenativeweb/assertthat/commit/08b3b60d99263a90aab07e8bd2dd5caac155f228))

## [5.2.7](https://github.com/thenativeweb/assertthat/compare/5.2.6...5.2.7) (2021-03-25)


### Bug Fixes

* bump comparejs from 4.0.5 to 4.0.6 ([#329](https://github.com/thenativeweb/assertthat/issues/329)) ([4c5dff0](https://github.com/thenativeweb/assertthat/commit/4c5dff006db1d03fd2fe2e95db51719641fdd378))

## [5.2.6](https://github.com/thenativeweb/assertthat/compare/5.2.5...5.2.6) (2021-03-25)


### Bug Fixes

* Migrate from master to main. ([#327](https://github.com/thenativeweb/assertthat/issues/327)) ([88ce4f9](https://github.com/thenativeweb/assertthat/commit/88ce4f9e8b411e9592c19cb8395a10dbfb2d59ff))

## [5.2.5](https://github.com/thenativeweb/assertthat/compare/5.2.4...5.2.5) (2020-11-03)


### Bug Fixes

* bump comparejs from 4.0.3 to 4.0.4 ([#247](https://github.com/thenativeweb/assertthat/issues/247)) ([d6b81f3](https://github.com/thenativeweb/assertthat/commit/d6b81f3cf4b57f6edcf8f5b962fd6916998f1263))

## [5.2.4](https://github.com/thenativeweb/assertthat/compare/5.2.3...5.2.4) (2020-11-03)


### Bug Fixes

* bump comparejs from 4.0.2 to 4.0.3 ([#246](https://github.com/thenativeweb/assertthat/issues/246)) ([de2490d](https://github.com/thenativeweb/assertthat/commit/de2490d22a73e991c871e8465d24b595e572ea94))

## [5.2.3](https://github.com/thenativeweb/assertthat/compare/5.2.2...5.2.3) (2020-11-03)


### Bug Fixes

* bump comparejs from 4.0.1 to 4.0.2 ([#245](https://github.com/thenativeweb/assertthat/issues/245)) ([1062445](https://github.com/thenativeweb/assertthat/commit/106244516a1437ea6f9e6b4e6eb310ddea9dff99))

## [5.2.2](https://github.com/thenativeweb/assertthat/compare/5.2.1...5.2.2) (2020-11-03)


### Bug Fixes

* Fix headline for robot section in readme. ([#240](https://github.com/thenativeweb/assertthat/issues/240)) ([f8e3885](https://github.com/thenativeweb/assertthat/commit/f8e3885b0cd2c6827612f0022d7610f5dfac8bde))

## [5.2.1](https://github.com/thenativeweb/assertthat/compare/5.2.0...5.2.1) (2020-07-17)


### Bug Fixes

* Actually export typed assertions. ([#194](https://github.com/thenativeweb/assertthat/issues/194)) ([b43ffd2](https://github.com/thenativeweb/assertthat/commit/b43ffd26c661e52f8342fc3184f4b018aff9a210))

# [5.2.0](https://github.com/thenativeweb/assertthat/compare/5.1.1...5.2.0) (2020-07-17)


### Features

* Introduce option to type exception as custom errors. ([#193](https://github.com/thenativeweb/assertthat/issues/193)) ([4c91377](https://github.com/thenativeweb/assertthat/commit/4c9137792e088b42efa0675fd977c56bc8f4b277))

## [5.1.1](https://github.com/thenativeweb/assertthat/compare/5.1.0...5.1.1) (2020-03-19)


### Bug Fixes

* bump comparejs from 4.0.0 to 4.0.1 ([#170](https://github.com/thenativeweb/assertthat/issues/170)) ([c7b6c4b](https://github.com/thenativeweb/assertthat/commit/c7b6c4b7f4b95ac739bd8014fd199cc3bf4c733d))

# [5.1.0](https://github.com/thenativeweb/assertthat/compare/5.0.2...5.1.0) (2019-11-29)


### Bug Fixes

* Add missing release configuration file. ([ba6692e](https://github.com/thenativeweb/assertthat/commit/ba6692e9c383934935b97f0988b7d4d6df570da5))
* Compile TypeScript before releasing. ([b0b076c](https://github.com/thenativeweb/assertthat/commit/b0b076cc50e5c69f80e9de7fdba5babd83019acb))


### Features

* Introduce GitHub Actions. ([da377a5](https://github.com/thenativeweb/assertthat/commit/da377a5fda3f290f29a12052663a914401b974ed))
