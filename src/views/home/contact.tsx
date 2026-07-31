import { SocialLink } from "@/data/mocks/home";
import { ContactForm } from "./contact-form";
import { HeadingReveal } from "./heading-reveal";

interface ContactProps {
  email: string;
  socials: SocialLink[];
}

export const Contact = ({ email, socials }: ContactProps) => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <HeadingReveal
            tag="h2"
            id="contact-heading"
            className="leading-display justify-start text-left text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Bog&apos;lanish
          </HeadingReveal>

          <p className="mt-4 max-w-md text-muted-foreground">
            Loyihangiz bormi yoki shunchaki salomlashmoqchimisiz? Xabar
            qoldiring — imkon qadar tez javob beraman.
          </p>

          <address className="mt-8 not-italic">
            <a
              href={`mailto:${email}`}
              className="text-lg font-medium text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-accent"
            >
              {email}
            </a>
          </address>

          <ul className="mt-6 flex flex-wrap gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-muted-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};
