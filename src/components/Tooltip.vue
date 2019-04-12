<template>
  <div class="tooltip" :class="name">
    <div class="holder">
      <slot></slot>
      <div class="pin" :class="pin">
        <IconSet name="hollowArrow" />
      </div>
    </div>
  </div>
</template>

<script>
import IconSet from '@/components/IconSet.vue';

export default {
  name: 'Tooltip',
  props: {
    name: {
      type: String,
      required: true,
    },
    pin: {
      default() {
        return 'none';
      },
      validator (value) {
        return ['top', 'right', 'bottom', 'left', 'none'].indexOf(value) !== -1;
      }
    }
  },
  components: {
    IconSet,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tooltip {
    position: fixed;
    min-width: 80px;
    min-height: 10px;
    font-size: 14px;
    padding: 6px 15px;
    padding-bottom: 8px;
    background: #000;
    color: #fff;
    border-radius: 20px;

    .holder {
      position: relative;
    }

    .pin {
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;

      svg {
        height: 18px;
        width: 18px;
      }

      &.bottom {
        bottom: -30px;
        width: 100%;
      }

      &.top {
        top: -30px;
        width: 100%;
        transform: scaleY(-1);
      }

      &.right {
        top: 0;
        height: 100%;
        left: initial;
        right: -41px;
        transform: rotate(-90deg);
      }

      &.left {
        top: 0;
        height: 100%;
        left: -41px;
        transform: rotate(90deg);
      }

      &.none {
        display: none;
      }
    }
  }
</style>
