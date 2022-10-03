export interface Commit {
  id: string;
  author: {
    avatar_url: string;
  };
  html_url: string;
  commit: {
    message: string;
    commiter: {
      date: string;
    };
  };
}
