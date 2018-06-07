# Roman Numeral converter

#### A program that allows users to input a number and convert it to Roman numeral 6/7/18

#### By **Kevin Ahn and Craig Wann**

## Description

A website created with JavaScript and HTML where a user can submit a number and determine its Roman Numeral value.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **simple numbers (ones)** | input: 1 | I |
| **special numbers (ones)** | input: 5 | V |
| **numbers before special numbers (ones)**| Input: 4 | IV |
| **2 digit numbers (tens)**| Input: 11 | XI |
| **3 digit numbers (hundreds)** | Input: 111 | Output: LXI |
| **4 digit numbers (thousands)**| Input: 1111 | Output: MLXI |
| **outside number range (over 3,999)**| Input: 4000 | Output: That is not a valid number |
| **strings that are not numbers**| Input: af45w | Output: That is not a number |


## Setup/Installation Requirements

1. To run this program, you must have a C# compiler. I use [Mono](http://www.mono-project.com).
2. Install the [Nancy](http://nancyfx.org/) framework to use the view engine. Follow the link for installation instructions.
3. Clone this repository.
4. Open the command line--I use PowerShell--and navigate into the repository. Use the command "dnx kestrel" to start the server.
5. On your browser, navigate to "localhost:5004" and enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* C#
  * Nancy framework
  * Razor View Engine
  * ASP.NET Kestrel HTTP server
  * xUnit

* HTML

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Kevin Ahn, Craig Wann}_**
