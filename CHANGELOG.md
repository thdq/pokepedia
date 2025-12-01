# [2.18.0](https://github.com/thdq/pokepedia/compare/v2.17.0...v2.18.0) (2025-12-01)


### Features

* allow componentsRegistration to return a Promise for asynchronous component registration ([#28](https://github.com/thdq/pokepedia/issues/28)) ([865dc53](https://github.com/thdq/pokepedia/commit/865dc53a82165e4d5218a517324a0dd86a41d0a8))

# [2.17.0](https://github.com/thdq/pokepedia/compare/v2.16.0...v2.17.0) (2025-12-01)


### Features

* update workflows to use 'main' branch instead of 'master' and remove unused configurations ([47710d5](https://github.com/thdq/pokepedia/commit/47710d539c7288cb2e2cbac8c8bb31f1e74e5d27))

# [2.16.0](https://github.com/thdq/pokepedia/compare/v2.15.0...v2.16.0) (2025-12-01)


### Features

* upgrade actions/checkout to v6 and switch to RELEASE_PAT for authentication in backmerge workflow ([93707a8](https://github.com/thdq/pokepedia/commit/93707a80b53c58a03032de18c3df814235c8168d))

# [2.15.0](https://github.com/thdq/pokepedia/compare/v2.14.0...v2.15.0) (2025-12-01)


### Bug Fixes

* update GitHub Actions workflow to use DEPLOY_KEY for GITHUB_TOKEN in semantic-release step ([9e94fc6](https://github.com/thdq/pokepedia/commit/9e94fc6f3982f252e1404093c79de26324c9db4f))
* update GitHub Actions workflow to use RELEASE_PAT for GITHUB_TOKEN in checkout and semantic release steps ([e07493c](https://github.com/thdq/pokepedia/commit/e07493ce625757cb7deef00b053e2943f51bc909))


### Features

* remove .releaserc.release.json configuration and clean up semantic-release action in GitHub workflow ([8ab4f3e](https://github.com/thdq/pokepedia/commit/8ab4f3ea4e6446050825f891eb0afbd1d2f90266))
* replace Tag Commit step with Git Version step in GitHub Actions workflow ([6ade00c](https://github.com/thdq/pokepedia/commit/6ade00c8d76da45198f81e2515229384a72c6484))
* update actions/checkout version to v6 in GitHub Actions workflow ([297cccc](https://github.com/thdq/pokepedia/commit/297ccccae1d1f7c015202eab93304799d10de40c))
* update GitHub Actions workflow to use semantic-release-action with changelog and git plugins ([205b6cf](https://github.com/thdq/pokepedia/commit/205b6cf89ee71ce56353490624a6427c6a67039e))

# [2.14.0](https://github.com/thdq/pokepedia/compare/v2.13.1...v2.14.0) (2025-11-27)


### Features

* update backmerge workflow to use rebase instead of merge for syncing development with master ([bcecaa2](https://github.com/thdq/pokepedia/commit/bcecaa2edc6e63e9be139540372f92460a86e91a))

## [2.13.1](https://github.com/thdq/pokepedia/compare/v2.13.0...v2.13.1) (2025-11-27)


### Bug Fixes

* enhance backmerge workflow to check if development is up-to-date with master before merging ([fd717e0](https://github.com/thdq/pokepedia/commit/fd717e04b8151e707ec6b8e35c8afaeb93c132e6))

# [2.13.0](https://github.com/thdq/pokepedia/compare/v2.12.0...v2.13.0) (2025-11-27)


### Features

* update backmerge workflow to use manual git commands for merging master into development and remove Firebase hosting workflows ([1d0cf7d](https://github.com/thdq/pokepedia/commit/1d0cf7d1b17c7489dc7e84e8eb3eca7af3cdbf49))

# [2.12.0](https://github.com/thdq/pokepedia/compare/v2.11.0...v2.12.0) (2025-11-27)


### Features

* add branch name check ([bbf0f3b](https://github.com/thdq/pokepedia/commit/bbf0f3b800b50fd87a9acaeb2c951c05edf086e8))

# [2.11.0](https://github.com/thdq/pokepedia/compare/v2.10.0...v2.11.0) (2025-11-27)


### Features

* update backmerge workflow to merge master into development using devmasx/merge-branch action ([8d4581b](https://github.com/thdq/pokepedia/commit/8d4581bb8eb466a37dcbc0429b83a7c456f4c799))

# [2.10.0](https://github.com/thdq/pokepedia/compare/v2.9.0...v2.10.0) (2025-11-27)


### Features

* add padding and margin to sidebar component ([#22](https://github.com/thdq/pokepedia/issues/22)) ([986119b](https://github.com/thdq/pokepedia/commit/986119b7ca708f2d480b088bcd002ec7610f0b28))

# [2.9.0](https://github.com/thdq/pokepedia/compare/v2.8.0...v2.9.0) (2025-11-27)


### Features

* update backmerge workflow trigger to use workflow_run on successful completion ([f5c5c73](https://github.com/thdq/pokepedia/commit/f5c5c735225907d591068bcef3229294e6d53426))

# [2.8.0](https://github.com/thdq/pokepedia/compare/v2.7.0...v2.8.0) (2025-11-27)


### Features

* update GitHub Actions workflow to use GITHUB_TOKEN instead of PAT_TOKEN ([70d2319](https://github.com/thdq/pokepedia/commit/70d2319f1e44c0ce200421f14e2d1296c50c30f4))

# [2.7.0](https://github.com/thdq/pokepedia/compare/v2.6.1...v2.7.0) (2025-11-27)


### Features

* update GitHub Actions workflow to use PAT_TOKEN instead of GITHUB_TOKEN ([3e253d2](https://github.com/thdq/pokepedia/commit/3e253d2ca77b5a9d613a39d04e6f0d78429ed334))

## [2.6.1](https://github.com/thdq/pokepedia/compare/v2.6.0...v2.6.1) (2025-11-26)


### Bug Fixes

* update release commit message format to remove notes ([d98f3db](https://github.com/thdq/pokepedia/commit/d98f3dbc237a05e9e03aa127c86ae71369cf74e3))

# [2.6.0](https://github.com/thdq/pokepedia/compare/v2.5.1...v2.6.0) (2025-11-26)


### Features

* **release:** update release commit message format to include [semantic-release] ([db5b714](https://github.com/thdq/pokepedia/commit/db5b71462b3f01498d0f135056cb5b7a0b35dc15))

## [2.5.1](https://github.com/thdq/pokepedia/compare/v2.5.0...v2.5.1) (2025-11-26)


### Bug Fixes

* update backmerge workflow trigger to workflow_dispatch ([64d804e](https://github.com/thdq/pokepedia/commit/64d804e89024e9a81f2a34af2cddaafa437c9346))

# [2.5.0](https://github.com/thdq/pokepedia/compare/v2.4.0...v2.5.0) (2025-11-26)


### Bug Fixes

* remove unnecessary blank line in generations.vue ([#20](https://github.com/thdq/pokepedia/issues/20)) ([4335f95](https://github.com/thdq/pokepedia/commit/4335f9539dc81672e57340a404f5535819f1c638))
* update backmerge workflow to use workflow_call trigger ([e7173fe](https://github.com/thdq/pokepedia/commit/e7173fe056248b43c01f0aa1d329292af369a1f8))
* update semantic-release command to use master configuration ([715204a](https://github.com/thdq/pokepedia/commit/715204a0fb70dde65bcddf77d89f5e72ada76f0e))


### Features

* change 6 ([#16](https://github.com/thdq/pokepedia/issues/16)) ([74b2c73](https://github.com/thdq/pokepedia/commit/74b2c73d90187db4dcddc7b9b0cf21d736663b5b))
* remove obsolete semantic-release configuration files ([1cae1bc](https://github.com/thdq/pokepedia/commit/1cae1bca1ae9af347acae7221d770b8c61732dbf))

# [2.6.0](https://github.com/thdq/pokepedia/compare/v2.5.0...v2.6.0) (2025-11-26)


### Bug Fixes

* remove unnecessary blank line in generations.vue ([#20](https://github.com/thdq/pokepedia/issues/20)) ([4335f95](https://github.com/thdq/pokepedia/commit/4335f9539dc81672e57340a404f5535819f1c638))


### Features

* change 6 ([#16](https://github.com/thdq/pokepedia/issues/16)) ([74b2c73](https://github.com/thdq/pokepedia/commit/74b2c73d90187db4dcddc7b9b0cf21d736663b5b))

# [2.6.0](https://github.com/thdq/pokepedia/compare/v2.5.0...v2.6.0) (2025-11-26)


### Features

* change 6 ([#16](https://github.com/thdq/pokepedia/issues/16)) ([74b2c73](https://github.com/thdq/pokepedia/commit/74b2c73d90187db4dcddc7b9b0cf21d736663b5b))

# [2.4.0](https://github.com/thdq/pokepedia/compare/v2.3.0...v2.4.0) (2025-11-26)


### Bug Fixes

* escape variables in semantic-release backmerge command ([fdeb17e](https://github.com/thdq/pokepedia/commit/fdeb17e4562885a6f2ec9eb3679a7e312580114a))


### Features

* remove semantic version pipeline workflow ([f4275e1](https://github.com/thdq/pokepedia/commit/f4275e1bfb309dd27d5cb28d03d8f26e4629460b))
* update semantic-release command to use configuration file ([131316e](https://github.com/thdq/pokepedia/commit/131316edf336cf6f944b3f745e1cc2b52d8ad730))

# [2.3.0](https://github.com/thdq/pokepedia/compare/v2.2.0...v2.3.0) (2025-11-26)


### Features

* update .releaserc and GitHub Actions workflow to include additional semantic release plugins ([b377007](https://github.com/thdq/pokepedia/commit/b3770070d4e6a72690ee38570a87c046e6060c05))

# [2.2.0](https://github.com/thdq/pokepedia/compare/v2.1.0...v2.2.0) (2025-11-26)


### Features

* update CHANGELOG.md with change 5 ([7a01fbe](https://github.com/thdq/pokepedia/commit/7a01fbedcd19da38b8b32812a3047788d9e29166))

# [2.1.0](https://github.com/thdq/pokepedia/compare/v2.0.0...v2.1.0) (2025-11-26)


### Bug Fixes

* change document language from English to Portuguese ([#2](https://github.com/thdq/pokepedia/issues/2)) ([#3](https://github.com/thdq/pokepedia/issues/3)) ([31652ce](https://github.com/thdq/pokepedia/commit/31652ce3eeca8a7f99520196c47ca6d4c7bf9375))
* height style to pokemon style ([77a8ad7](https://github.com/thdq/pokepedia/commit/77a8ad757644fb38499c5c8b3d309c1f7d5ffa01))


### Features

* use new svg service to show pokemons svg ([31e80e0](https://github.com/thdq/pokepedia/commit/31e80e0f6c839f3a6446529d7078a9da84e57f7e))


### Reverts

* Revert "chore: add change 1 ([#4](https://github.com/thdq/pokepedia/issues/4))" ([#5](https://github.com/thdq/pokepedia/issues/5)) ([c3c9a3c](https://github.com/thdq/pokepedia/commit/c3c9a3c94704e28c37592a3fcb65b5ee7e71d152))

change 1

change 2

change 3

change 4

change 5
