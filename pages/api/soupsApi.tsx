type Soups = {
  id: number;
  name: string;
  image: string;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/soups");
  const soups: Soups[] = await res.json();

  return {
    props: {
      soups,
    },
  };
};
