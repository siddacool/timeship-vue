<template>
  <div class="tooltip" :class="name">
    <div class="holder">
      <slot></slot>
      <div class="pin" :class="[pin, { bounce : bounce }]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
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
    bounce: Boolean,
    pin: {
      default() {
        return 'bottom';
      },
      validator (value) {
        return ['top', 'right', 'bottom', 'left'].indexOf(value) !== -1;
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

      @keyframes bounceBottom {
        0%   {bottom: -30px;}
        100% {bottom: -60px;}
      }

      @keyframes bounceTop {
        0%   {top: -30px;}
        100% {top: -60px;}
      }

      @keyframes bounceLeft {
        0%   {left: -41px;}
        100% {left: -71px;}
      }

      @keyframes bounceRight {
        0%   {right: -41px;}
        100% {right: -71px;}
      }


      &.bottom {
        bottom: -30px;
        width: 100%;

        &.bounce {
          animation: bounceBottom 600ms cubic-bezier(0.47, 0, 0.75, 0.72) infinite;
        }
      }

      &.top {
        top: -30px;
        width: 100%;
        transform: scaleY(-1);

        &.bounce {
          animation: bounceTop 600ms cubic-bezier(0.47, 0, 0.75, 0.72) infinite;
        }
      }

      &.right {
        top: 0;
        height: 100%;
        left: initial;
        right: -41px;
        transform: rotate(-90deg);

        &.bounce {
          animation: bounceRight 600ms cubic-bezier(0.47, 0, 0.75, 0.72) infinite;
        }
      }

      &.left {
        top: 0;
        height: 100%;
        left: -41px;
        transform: rotate(90deg);

        &.bounce {
          animation: bounceLeft 600ms cubic-bezier(0.47, 0, 0.75, 0.72) infinite;
        }
      }
    }
  }
</style>
