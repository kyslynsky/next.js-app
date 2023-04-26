import { Button, HTag, PTag, Tag, Rating, Input, Textarea } from "@/components";
import { layoutWrapping } from "@/layout";
import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces";
import { API } from "@/helpers/api";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <main>
      <HTag tag="h1">Text</HTag>
      <HTag tag="h2">Text</HTag>
      <HTag tag="h3">Text</HTag>
      <Button appearence="primary">BtnPr</Button>
      <Button appearence="ghost" arrow="down">
        BtnGst
      </Button>
      <Button appearence="ghost" arrow="rigth">
        BtnGst
      </Button>
      <PTag size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus voluptatibus? Tempore laborum repudiandae quaerat. Vitae nobis, ex
        perferendis quae sapiente adipisci, corporis fugit dicta pariatur a eligendi culpa voluptate.
      </PTag>
      <PTag size="m">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus voluptatibus? Tempore laborum repudiandae quaerat. Vitae nobis, ex
        perferendis quae sapiente adipisci, corporis fugit dicta pariatur a eligendi culpa voluptate.
      </PTag>
      <PTag size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus voluptatibus? Tempore laborum repudiandae quaerat. Vitae nobis, ex
        perferendis quae sapiente adipisci, corporis fugit dicta pariatur a eligendi culpa voluptate.
      </PTag>
      <Tag size="m" color="grey">
        10
      </Tag>
      <Tag size="s" color="red">
        hh
      </Tag>
      <Tag size="s" color="transparent">
        Category
      </Tag>
      <Tag size="s" color="green">
        Price
      </Tag>
      <Tag size="s" color="primary">
        Courses
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
      <Input placeholder="Test" />
      <Textarea placeholder="Textar" />
    </main>
  );
}

export default layoutWrapping(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
