import { layoutWrapping } from "@/layout";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem, TopLevelCategory } from "@/interfaces";
import { firstLevelMenu } from "@/helpers";
import { ParsedUrlQuery } from "querystring";

function Type({ firstCategory }: TypeProps): JSX.Element {
  return (
    <>
      <div>Type {firstCategory}</div>
    </>
  );
}

export default layoutWrapping(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
      firstCategory: firstCategoryItem._id,
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem._id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
