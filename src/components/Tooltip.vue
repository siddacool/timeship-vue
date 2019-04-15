<template>
  <div class="tooltip" :class="name">
    <div class="holder">
      <slot></slot>
      <div class="pin" :class="pin">
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
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
