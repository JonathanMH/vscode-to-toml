# vscode to TOML

This extension converts files to toml (if possible).

Currently supported source file formats:

* JSON
* YAML

## Example

If you currently have a file open that contains for example yaml, you can hit `CTRL+SHIFT+P` and start typing `to TOML` (casing does not matter).

It will turn a file like this:

```yaml
jobs:
  job1:
    steps:
      - checkout
      - run: "execute-script-for-job1"
```

into

```toml
[jobs.job1]
steps = ["checkout",{"run":"execute-script-for-job1"}]
```

Please make sure to do this with version controlled files as part of planned refactors as it will replace the content of your current file.

## Download:

* https://marketplace.visualstudio.com/items?itemName=jonathanmh.vscode-to-toml

## Usage

Hit `CTRL + SHIFT + P` and type: `to toml` when editing JSON file to replace it with TOML. Careful, this is a destructive operation.

## Credits

Even though misguided in the adoption of [yaml](https://noyaml.com/), my colleague [@hilleer](https://github.com/hilleer/) has created a plugin for converting between yaml and json, which made the development of this extension way easier: [hilleer/vscode-yaml-plus-json](https://github.com/hilleer/vscode-yaml-plus-json)
