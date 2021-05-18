import { map } from 'ramda';
import { classNum } from "@/constant/website";

const created = function () {
  console.log('Route Params:', this.$route)
  console.log('Route Name:', this.$route.name)
}

const data = function () {
  return {
    classInfo: map(e => ({name: e, link: `/${this.$route.name}/${e}`}) , classNum),
  };
};

export default {
  data,
  created,
};
