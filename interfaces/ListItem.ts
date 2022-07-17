export default interface ListItem {
  title: string;
  text: string;
  image?: string;
  rating?: number | "💩" | "🤩";
  emoji?: string;
};
