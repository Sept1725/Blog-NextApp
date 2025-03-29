import Container from "components/Container";
import Hero from "components/Hero";
import PostBody from "components/PostBody";

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About development activities" />
      <PostBody>
        <p>説明1</p>
        <h2>項目タイトル1</h2>
        <p>内容1</p>
      </PostBody>
    </Container>
  );
}
