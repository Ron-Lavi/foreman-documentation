# Foreman documentation

THIS IS A WORK IN PROGRESS. VISIT THE OFFICIAL [FOREMAN OR KATELLO DOCUMENTATION](https://theforeman.org/documentation.html) IF YOU ARE SEEKING HELP.

This git repository contains PoC of improving Foreman documentation.

## Foreman Guides

This is a tree of documentation based on Red Hat Satellite 6 official books.
Contributions are welcome.
See README in the guides/ subdirectory for more information.

* [guides](guides/README.md)

## Static Site

The landing page for [docs.theforeman.org](https://docs.theforeman.org) is available as a Hugo project.
See README in the web/ subdirectory for more information.

* [web](web/README.md)

## Deployment

Github actions perform HTML (with link validation), PDF and WEB artifact creation and if succeeded and branch is master or stable, artifacts are downloaded, extracted and deployed (commited into gh-pages). Deployment does not delete files, in order to remove some unwanted content, manual deletion and push into gh-pages must be performed.

When a commit is pushed into `master`:

* All artifacts are built.
* Static WEB and HTML is downloaded and copied into `/` or `/nightly` respectively.
* Changes are pushed into `gh-pages` branch.

When a commit is pushed into `X.Y`:

* All artifacts are built.
* HTML artifact is downloaded and copied into `/X.Y`.
* Changes are pushed into `gh-pages` branch.

## Branching new release

* Create a copy of [/web/content/2.3.md](https://github.com/theforeman/foreman-documentation/tree/master/web/content/version-2.3) (or older version) as `X.Y.md` and edit it accordingly.
* Edit [/web/content/versions.md](https://github.com/theforeman/foreman-documentation/blob/master/web/content/versions.md) and add the new version to the menu.
* Push the changes into `master`.
* Check the site if links and landing page appeared correctly.
* Create a new `X.Y` branch.
* Update `TargetVersion` and `TargetVersionMaintainUpgrade` in `guides/common/attributes.adoc`
* Push into `X.Y` branch.
* HTML guildes should be deployed into `/X.Y`
* Set `DocState` to `unsupported` in `guides/common/attributes.adoc`

## License

See LICENSE files in individual subdirectories.
