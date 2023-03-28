/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "Is it free?",
    contents: (
      <div>
        Self-hosted FlowiseAI will always be free and source code available.
        <br />
        Additional charge may applies to ChatGPT Plugin deployment.
      </div>
    ),
  },
  {
    title: "How to get started?",
    contents: (
      <div>
        It is as easy as running
        <br />
        <code
          style={{
            color: "white",
            background: "#343A40",
            padding: 10,
            borderRadius: 10,
          }}
        >
          npm install -g flowiseai
        </code>
        <br />
        <br />
        Followed by
        <br />
        <code
          style={{
            color: "white",
            background: "#343A40",
            padding: 10,
            borderRadius: 10,
          }}
        >
          npx flowiseai start
        </code>
      </div>
    ),
  },
  {
    title: `Does it support Docker?`,
    contents: (
      <div>
        Yes! You can spin up a docker container by:
        <br />
        <code
          style={{
            color: "white",
            background: "#343A40",
            padding: 10,
            borderRadius: 10,
          }}
        >
          docker-compose up -d
        </code>
      </div>
    ),
  },
  {
    title: `How to reach out?`,
    contents: (
      <div>
        Feel free to reach us at:
        <br />
        <a target="_blank" href="mailto:hello@flowiseai.com">
          hello@flowiseai.com
        </a>
        <br />
        <a target="_blank" href="https://discord.gg/GWcGczPk">
          Discord
        </a>
        <br />
        <a target="_blank" href="https://calendly.com/henryheng/30min">
          Book Demo
        </a>
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }} id="faq">
      <Container>
        <SectionHeader title="Frequently asked question" slogan="" />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
