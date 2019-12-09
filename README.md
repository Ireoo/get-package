# get-package

> **Github Action**

Get your package infos of your repo.

## Outputs

### `package`

The package infos.

## Example usage

```yaml
steps:
- uses: actions/checkout@v1
- name: Get package version
    id: package
    uses: Ireoo/get-package@v1
    with:
        path: ./package.json # (must)
        key: version         # (must)
        content: ./update.md # (this file address, no must)
- name: Echo package and content
    run: echo '${{ toJSON(steps.package.outputs) }}.'
```
