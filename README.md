# translate-helper

The command-line utility operates on two files, which should be located in the same directory where the utility is executed. The first file is the text file to be analyzed, and the second file is the YAML configuration file.

The text file contains the original text to be processed. The utility reads this file and performs word analysis and replacement based on the provided stop words in the YAML configuration.

The YAML configuration file contains a mapping of stop words and their corresponding new values. It should be in YAML format and follow the key-value structure. The utility uses this configuration to identify stop words in the text and replace them with the desired values.

Once the utility completes the analysis and replacement process, it generates a result file in the same directory. The result file is named "Exchanger_Result.txt" and contains the modified text with the replaced words.

By placing the text file, YAML configuration file, and executing the utility in the same directory, you ensure that the utility can access and process the necessary files and generate the result file as expected.

## How to install:

Please do clone this repository and install Dependencies.
You could as well use the command below:

```
make install
```
## Guideline:

```
Usage: exchanger [options] <File> <configName>

Text analysis tool that replaces stop words with new values

Options:
  -V, --version  output the version number
  -h, --help     output usage information
```
---
## Example: 

**Command-Line Utility for Word Replacement**

The command-line utility takes a text file and a YAML object of stop words as input. It analyzes the text and replaces any occurrences of stop words with their corresponding new values from the YAML object.

**Example:**

Let's consider the following text:

```
"Nikita went to the store, Oleg gave a watermelon, Katya made a call, Sasha took a ball."
```

And we have a YAML object of stop words in the same directory as the utility:

```yaml
Nikita: 'John'
Oleg: 'Peter'
Katya: 'Emily'
Sasha: 'Alex'
```

The utility iterates through each word in the text and checks if it exists as a key in the YAML object. If a word is found as a key, it is replaced with the corresponding value from the YAML object.

As a result, we get the modified text:

```
"John went to the store, Peter gave a watermelon, Emily made a call, Alex took a ball."
```

This utility enables text analysis and automated replacement of specific words with desired values based on the provided YAML object. Remember that the YAML object of stop words must be in YAML format and located in the same directory where the utility is executed.

---

<a href="https://codeclimate.com/github/nesquick017/translate-helper/maintainability"><img src="https://api.codeclimate.com/v1/badges/34c92a1dee77a8873972/maintainability" /></a>    <a href="https://codeclimate.com/github/nesquick017/translate-helper/test_coverage"><img src="https://api.codeclimate.com/v1/badges/34c92a1dee77a8873972/test_coverage" /></a>
