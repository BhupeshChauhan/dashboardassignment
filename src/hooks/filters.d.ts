type Ifilters = {
    query: string
}

type IUseListView = {
    getAPI: (a: object) => Promise<SetStateAction<never[]>>;
  };