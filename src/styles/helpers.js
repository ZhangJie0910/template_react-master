import {
  MQ_XXL,
  MQ_XL,
  MQ_LG,
  MQ_SLG,
  MQ_XMD,
  MQ_XXMD,
  MQ_MD,
  MQ_SM,
  MQ_XS,
  MQ_XXS,
} from "./config";

export function getMedia(name) {
  switch (name) {
    case "xxl": {
      return MQ_XXL;
    }
    case "xl": {
      return MQ_XL;
    }
    case "lg": {
      return MQ_LG;
    }
    case "slg": {
      return MQ_SLG;
    }
    case "xmd": {
      return MQ_XMD;
    }
    case "xxmd": {
      return MQ_XXMD;
    }
    case "md": {
      return MQ_MD;
    }
    case "sm": {
      return MQ_SM;
    }
    case "xs": {
      return MQ_XS;
    }
    case "xxs": {
      return MQ_XXS;
    }
    default: {
      return name;
    }
  }
}
