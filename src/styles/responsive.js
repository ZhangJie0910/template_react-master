import { getMedia } from "./helpers";

export const media = (size, props) => {
  const attr = getMedia(size);
  const styles = {};
  styles[attr] = props;
  return styles;
};

export const md = media;
