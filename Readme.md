# FAQ Component for React

`pt-faq` is a customizable FAQ component for React that enables you to easily integrate a FAQ section into your web application. This component supports light and dark themes and allows you to dynamically render FAQ items with a simple and intuitive API.

## Features

- **Dynamic FAQ List:** Easily add and manage FAQs.
- **Light and Dark Mode Support:** Customize the appearance for both light and dark themes.
- **Responsive Design:** Fully responsive and optimized for all screen sizes.
- **TypeScript Support:** Built with TypeScript for better type safety and developer experience.

## Installation

To install the package, use npm:

```bash
npm install my-faq-package
```

## Usage
 - Here’s how you can use the FAQ component in your project:

``` 
import React from 'react';
import FAQ from 'my-faq-package';

const faqs = [
  { question: 'Do you offer both men’s and women’s haircuts?', answer: 'Yes, we offer a full range of haircut services for both men and women.' },
  { question: 'Do you offer grooming services for men?', answer: 'Yes, we offer beard trims, shaves, and more.' },
  { question: 'Do you provide services for special occasions?', answer: 'Yes, we offer styling services for weddings and other events.' },
  { question: 'What hygiene measures are you following?', answer: 'We adhere to strict hygiene protocols to ensure a safe environment for our clients.' }
];

const App = () => (
  <FAQ
    faqs={faqs}
    colors={{
      lightMode: {
        background: '#f9f9f9',
        text: '#333',
        border: '#ccc'
      },
      darkMode: {
        background: '#222',
        text: '#ddd',
        border: '#444'
      }
    }}
  />
);

export default App;

```


