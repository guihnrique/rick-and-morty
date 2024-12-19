export type Location = {
  info: {
    count: number;
    pages: string;
    next: string;
    prev: string;
  };
  results: [
    {
      id: number;
      name: string;
      type: string;
      dimension: string;
      residents: [];
      url: string;
      created: string;
    },
  ];
};
