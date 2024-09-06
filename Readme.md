# FAQ Component for React

A customizable FAQ (Frequently Asked Questions) React component designed to easily integrate an FAQ section into your application. This component supports light and dark modes and allows for easy customization of styles.

## Features

- **Dynamic FAQ List:** Easily add and manage FAQs.
- **Light and Dark Mode Support:** Customize the appearance for both light and dark themes.
- **Responsive Design:** Fully responsive and optimized for all screen sizes.
- **TypeScript Support:** Built with TypeScript for better type safety and developer experience.

## Installation

To install the package, use npm:

```bash
npm install pt-faq
```

## Usage

Here’s how you can use the FAQ component in your project:

```JavaScript + React

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

## Props

| Prop           | Type           | Required       | Description    |
| -------------- | -------------- | -------------- | -------------- |
| faqs |Array<{ question: string; answer: string }> | Yes | An array of objects containing questions and answers for the FAQ section.|
| contact | { url: string } | No| Optional. Adds a "Contact Us" link if users can't find the answer. |
| colors | Object  | No | Customize colors for both light and dark modes (background, text, border). |

## Color Object Example

The colors prop allows you to define custom colors for both light and dark themes.

```JavaScript

   colors={
       {
        lightMode: {
          background: '#ffffff',
          text: '#000000',
          border: '#cccccc',
        },
        darkMode: {
          background: '#333333',
          text: '#ffffff',
          border: '#444444',
        },
      }
}

```

## Customization

- You can fully customize the colors of the FAQ component using the colors prop for both light mode and dark mode.

- Add a contact link by passing the contact prop with a url.

## Example of Contact Link

```JavaScript + React
    <FAQ
     faqs={faqs}
     contact={{ url: 'https://yourwebsite.com/contact' }}
    />
```

## Development

If you’d like to contribute or modify this package, follow these steps:

```bash

    git clone https://github.com/impriyanshu29/faq-npm.git
    cd my-faq-package
    npm install
    npm run build

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by the need for a simple and customizable FAQ component for React applications.

- Special thanks to the React community for their support and feedback.

## Contact

For any questions or feedback, feel free to reach me at [email protected](mailto:priyanshutiwari2901@hotmail.com)
