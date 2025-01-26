import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  


const Faq = () => {
  const faqs = [
    {
      "question": "What types of photobooths do you offer?",
      "answer": "We offer a variety of photobooths, including Mirror Booths, DSLR Booths, and 360 Booths, each tailored to suit different event styles and preferences."
    },
    {
      "question": "Can the photobooth be set up outdoors?",
      "answer": "An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner."
    },
    {
      "question": "Can I personalize the photo prints for my event?",
      "answer": "An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner."
    },
    {
      "question": "Do you provide custom backdrops?",
      "answer": "An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner."
    },
    {
      "question": "Can I add custom music or animations to the DSLR, Mirror or 360 Booth?",
      "answer": "An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner."
    }
  ]

  return (
    <section className="md:w-11/12 mx-auto">
        <h1 className="font-pinyon text-4xl text-center my-5 md:mb-10 md:text-6xl">FAQs</h1>
    <Accordion type="single" collapsible className="font-baskerville">
    {faqs.map((faq, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`} >
        <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
        <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
  </section>
  );
};

export default Faq;