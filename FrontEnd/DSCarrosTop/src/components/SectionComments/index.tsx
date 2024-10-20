import CardComment from "../CardComment";
import "./styles.css";

export default function SectionComments() {
  return (
    <section className="section-comments">
      <h2>O que estão dizendo</h2>
      <CardComment />
      <CardComment />
      <CardComment />
      <CardComment />
      <CardComment />
      <CardComment />
    </section>
  );
}
