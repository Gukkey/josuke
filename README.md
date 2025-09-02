<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![ISC License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Josuke</h1>

  <p align="center">
    A lightweight NPM library for robust email address validation
    <br />
    <!-- <a href="https://github.com/gukkey/josuke"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://github.com/gukkey/josuke/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/gukkey/josuke/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Josuke is a fast, reliable email validation library built as an enhanced fork of the popular <a href="https://github.com/manishsaraan/email-validator">email validator library</a>. It uses the standard regex that is used there, but goes beyond basic regex patterns by validating email addresses against RFC standards.
<br/>
<br/>
The difference between josuke and email validator library (right now) is that josuke also checks whether the TLD is valid using an up-to-date list of valid domains, while also focusing on adding more fine-grained validations like whether a given email is an organizational email or educational email or comes under a given TLD list by a user in future.

### Key Features

- **RFC Compliant**: Follows email address standards for proper validation
- **TLD Validation**: Validates against a comprehensive list of valid top-level domains
- **Lightweight**: Minimal dependencies and small bundle size
- **TypeScript Support**: Includes TypeScript definitions
- **Dual Module Support**: Works with both CommonJS and ES modules

### Built With

- **Node.js** - Runtime environment
- **Babel** - For CommonJS compilation
- **TypeScript** - Type definitions
- **Mocha & Chai** - Testing framework

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

Install Josuke using npm:

```sh
npm install josuke
```

Or using yarn:

```sh
yarn add josuke
```

<!-- ### Prerequisites

- Node.js 14.0 or higher
- npm or yarn package manager -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### ES Modules (ESM)

```javascript
import { validate } from "josuke";

console.log(validate("user@example.com")); // true
console.log(validate("invalid.email")); // false
console.log(validate("user@invalid.tld")); // false
```

### CommonJS

```javascript
const { validate } = require("josuke");

console.log(validate("user@example.com")); // true
console.log(validate("invalid.email")); // false
```

### TypeScript

```typescript
import { validate } from "josuke";

const email: string = "user@example.com";
const isValid: boolean = validate(email);
console.log(isValid); // true
```

### Validation Rules

Josuke validates emails based on:

- **Local part length**: Maximum 64 characters
- **Domain length**: Maximum 255 characters
- **Domain part length**: Each part maximum 63 characters
- **TLD validation**: Must be a valid top-level domain
- **RFC compliance**: Follows standard email format rules

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- ## Roadmap

- [x] Basic email validation with RFC compliance
- [x] TLD validation against comprehensive list
- [x] TypeScript support
- [x] Dual module support (ESM/CommonJS)
- [ ] Internationalized domain name (IDN) support
- [ ] Custom validation rules
- [ ] Email suggestion for common typos
- [ ] Performance optimizations -->
<!--
See the [open issues](https://github.com/gukkey/josuke/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

### Top contributors:

<a href="https://github.com/gukkey/josuke/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gukkey/josuke" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

<!-- ## License -->

<!-- Distributed under the ISC License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTACT -->
<!--
## Contact

Guhan - gukkey@protonmail.com

Project Link: [https://github.com/gukkey/josuke](https://github.com/gukkey/josuke)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [RFC 5322](https://tools.ietf.org/html/rfc5322) - Internet Message Format specification
- [TLD-List](https://tld-list.com/) - A website that provides a easy to download list of TLDs.
- [Email Address Regular Expression](http://emailregex.com/) - Email validation patterns
- [Mocha](https://mochajs.org/) - JavaScript test framework
- [Babel](https://babeljs.io/) - JavaScript compiler

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/gukkey/josuke.svg?style=for-the-badge
[contributors-url]: https://github.com/gukkey/josuke/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gukkey/josuke.svg?style=for-the-badge
[forks-url]: https://github.com/gukkey/josuke/network/members
[stars-shield]: https://img.shields.io/github/stars/gukkey/josuke.svg?style=for-the-badge
[stars-url]: https://github.com/gukkey/josuke/stargazers
[issues-shield]: https://img.shields.io/github/issues/gukkey/josuke.svg?style=for-the-badge
[issues-url]: https://github.com/gukkey/josuke/issues
[license-shield]: https://img.shields.io/github/license/gukkey/josuke.svg?style=for-the-badge
[license-url]: https://github.com/gukkey/josuke/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
