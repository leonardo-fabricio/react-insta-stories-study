import { StoriesListComponent } from "@/components/StoriesList";
import { StoryProps } from "@/interfaces/story";
import styled from "styled-components";

const data: StoryProps[] = [
  {
    name: "Frutas",
    image: "/assets/imgs/frutas.jpg",
    description: "Uma variedade de frutas deliciosas e saudáveis.",
    stories: [
      "https://i0.wp.com/gcene.com/wp-content/uploads/2019/02/frutas.jpg?fit=1200%2C628&ssl=1",
      "https://media.gazetadopovo.com.br/2023/03/30141325/bigstock-Watermelon-Slice-On-Background-460538017-960x540.jpg",
      "https://i0.wp.com/spdm.org.br/wp-content/uploads/2018/03/k2_items_src_6bfebd1c3ab25d1cf8939c071f7a71e9.jpg?fit=1200%2C800&ssl=1",
    ],
  },
  {
    name: "Vegetais",
    image: "/assets/imgs/vegetais.jpg",
    description:
      "Diversos vegetais frescos e coloridos para uma dieta equilibrada.",
    stories: [
      "https://midias.agazeta.com.br/2022/04/07/vegetais-738900.jpg",
      "https://istoe.com.br/wp-content/uploads/2022/08/vegetais-menos-saudaveis-scaled.jpg",
    ],
  },
  {
    name: "Carnes",
    image: "/assets/imgs/carnes.jpg",
    description: "Carnes de alta qualidade para refeições saborosas.",
    stories: [
      "https://www.nutrimixassessoria.com.br/wp-content/uploads/2019/01/recomendacoes-de-boas-praticas-de-fabricacao-para-industria-de-carnes-1140x641.jpg",
    ],
  },
  {
    name: "Laticínios",
    image: "/assets/imgs/laticineos.jpeg",
    description: "Produtos lácteos frescos e nutritivos.",
    stories: [
      "https://laticiniosfrizzo.com.br/wp/wp-content/uploads/2020/09/site_frizzo-1024x715.png",
      "https://portalidea.com.br/cursos/laticnios.webp",
    ],
  },
];

export default function Home() {
  return (
    <Container>
      <Content>
        <StoriesListComponent storiesCategory={data} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  padding-top: 8px;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
`;
