import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <aside id="faq"  className="flex flex-col justify-around h-[15rem] max-[640px]:flex-wrap  max-[375px]:mt-[45%]  max-[485px]:mt-[65%] max-[640px]:mt-[85%]  max-[640px]:mt-[65%] max-[640px]:h-[30rem] content-center min-[970px]:flex-row   ">
    <Accordion type="single" collapsible className="w-[20%] flex flex-wrap flex-col max-[640px]:w-[63%] max-[640px]:h-[14rem]" >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you have a wife and/or a child ?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Where do you live ?</AccordionTrigger>
        <AccordionContent>
        I live in Noyelles-Godault, near Lille. It's about a 20-minute train ride away.
        </AccordionContent>
      </AccordionItem>
      </Accordion>
      <Accordion collapsible className="w-[20%] flex flex-wrap flex-col  max-[640px]:w-[63%] max-[640px]:h-[14rem]">
      <AccordionItem value="item-4">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </aside>
  )
}
