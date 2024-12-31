import { AboutMe } from "@/components/AboutMe";
import { AditionalInfo } from "@/components/AditionalInfo";
import { Cards } from "@/components/Cards";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Separator } from "@/components/Separator";

export default function Home() {
  return (
    <Container>
      <Header/>
      <AboutMe/>
      <Cards/>
      <AditionalInfo/>
      <Separator/>
      <Footer/>
    </Container>
  );
}