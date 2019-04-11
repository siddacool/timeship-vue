<template>
  <svg width="24px" height="24px" viewBox="0 0 24 24">
    <path :d="getIcon"/>
  </svg>
</template>

<script>
import { Fragment } from 'vue-fragment';

const handle = 'M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z';

const close = 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.084L16.097 17.5l-4.09-4.096L7.905 17.5 6.5 16.095l4.093-4.092L6.5 7.905 7.905 6.5l4.088 4.089L16.084 6.5 17.5 7.903l-4.092 4.087 4.092 4.094z';

const hollowArrow = 'M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z';

const iconsDir = {
  handle,
  close,
  hollowArrow,
}

export default {
  name: 'IconSet',
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      iconsDir,
    }
  },
  computed: {
    getIcon() {
      return this.iconsDir && this.iconsDir[this.name] ? this.iconsDir[this.name] : '';
    }
  },
  components: {
    Fragment,
  }
};
</script>