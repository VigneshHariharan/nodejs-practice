export interface INote {
  title?: string;
  study_resources?: string;
  content: string;
  created_by: number;
  revised_at?: string;
  is_private?: boolean;
}
