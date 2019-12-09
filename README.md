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
        path: ./package.json
- name: Echo package
    run: echo 'Latest version is ${{ steps.package.outputs.package }}.'
```
