export interface Blog {
  id: string;
  author: string;
  avatar?: string | null;
  title: string;
  content: string;
  created: number;
}
