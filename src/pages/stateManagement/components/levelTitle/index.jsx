import Heading from "./Heading";
import Section from "./Section";

export default function Page() {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
      <Section>
        <Heading>副标题2</Heading>
        <Section>
          <Heading>子标题2</Heading>
          <Section>
            <Heading>子子标题2</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
