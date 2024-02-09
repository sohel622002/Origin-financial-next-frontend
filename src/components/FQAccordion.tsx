import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qesAndAns = [
  {
    id: "123456789",
    que: "How does back pricing work?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nostrum id adipisci cupiditate deleniti.",
  },
  {
    id: "987145633",
    que: "How does back pricing work?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nostrum id adipisci cupiditate deleniti.",
  },
  {
    id: "987145544",
    que: "How does back pricing work?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nostrum id adipisci cupiditate deleniti.",
  },
  {
    id: "100145633",
    que: "How does back pricing work?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nostrum id adipisci cupiditate deleniti.",
  },
  {
    id: "987145600",
    que: "How does back pricing work?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nostrum id adipisci cupiditate deleniti.",
  },
  {
    id: "987775633",
    que: "How does back pricing work?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nostrum id adipisci cupiditate deleniti.",
  },
];

export default function QueAnsAccord() {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-3 w-full"
      >
        {qesAndAns.map((qa) => (
          <AccordionItem value={qa.id} key={qa.id} className="border-2 rounded border-[rgb(23,15,74)] px-3">
            <AccordionTrigger className="text-base font-semibold text-[tgb(23,15,74)]">
              {qa.que}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {qa.ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

// export default function QueAnsAccord() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// }
