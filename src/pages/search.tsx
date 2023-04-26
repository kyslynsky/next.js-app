import { layoutWrapping } from "@/layout";

import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces";
import { API } from "@/helpers/api";

function Search(): JSX.Element {
  return (
    <>
      <div>Search</div>
    </>
  );
}

export default layoutWrapping(Search);

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
