import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-stone">FAQ</p>
        <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">
          Before your first visit
        </h2>
        <dl className="mt-10 space-y-8">
          {faqs.map((item) => (
            <div key={item.id}>
              <dt className="font-serif text-xl text-charcoal">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
