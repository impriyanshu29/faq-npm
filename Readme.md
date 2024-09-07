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
### Note: You also need to install and configure Tailwind CSS if it isn't already in your project. Follow the Tailwind CSS installation guide if necessary.
## Usage

Here’s how you can use the FAQ component in your project:

```JavaScript + React

  


import FAQ from "pt-faq";
const faqs = [
  { question: 'What is your return policy?', answer: 'You can return items within 30 days.' },
  { question: 'Do you ship internationally?', answer: 'Yes, we ship worldwide.' },
  { question: 'How do I track my order?', answer: 'You can track your order on our website.' },
  // Add more FAQs as needed
];

const App = () => (
  <FAQ 
    faqs={faqs} 
    classNames={{
      section: 'bg-blue-50 dark:bg-gray-900', // Custom background
      question: 'text-blue-700 dark:text-red-100', // Custom question text
      answer: 'text-blue-500 dark:text-gray-300', // Custom answer text
      border: 'border-blue-300 dark:border-gray-500' // Custom border
    }} 
    contact={{ url: 'https://example.com/contact' }}
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


## Customization


- This package allows full customization using Tailwind CSS classes. To change the background, text, and border colors, simply pass the relevant Tailwind CSS classes via the className prop.

- Add a contact link by passing the contact prop with a url.
### Example for light mode:
```JavaScript + React
  <FAQ 
  faqs={faqItems} 
  className="bg-white text-gray-900 border-gray-200"
/>
```
### Example for dark mode:
  ```JavaScript + React
  <FAQ 
  faqs={faqItems} 
  className="bg-gray-900 text-white border-gray-700"
/>
```
### Example of Contact Link

```JavaScript + React
    <FAQ
     faqs={faqs}
     contact={{ url: 'https://yourwebsite.com/contact' }}
    />
```
## Styling With Tailwind

Ensure Tailwind CSS is set up in your project. You can install it by following the Tailwind CSS Installation Guide.

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

For any questions or feedback, feel free to reach me at [Email me](mailto:priyanshutiwari2901@hotmail.com)
