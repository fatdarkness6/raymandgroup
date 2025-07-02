<template>
  <MotionGroup :duration="duration">
    <Motion
      v-for="(item, index) in loopItems"
      :key="index"
      :delay="index * (delay || 0)"
      :preset="resolvePreset(index + 1)"
      :class="resolveClass(index + 1)"
    >
      <slot :item="item" :i="index + 1"></slot>
    </Motion>
  </MotionGroup>
</template>

<script setup lang="ts">
import type { AnimationComponentsType } from "~/types/animationComponent";

const props = defineProps<AnimationComponentsType>();

const loopItems =
  props.items && props.items.length > 0
    ? props.items
    : Array(props.numberOfLoops).fill(null);

const resolvePreset = (i: number): string => {
  const { preset } = props;

  if (typeof preset === "function") {
    return preset(i);
  } else if (Array.isArray(preset)) {
    if (preset.length === 2) {
      return detectEvenNumber(i) ? preset[0] : preset[1];
    }
    return preset[i - 1] || preset[0];
  } else if (typeof preset === "string") {
    return preset;
  } else {
    return "defaultMotion";
  }
};

const resolveClass = (i: number): string => {
  const klass = props.motionClass;

  if (typeof klass === "function") {
    return klass(i);
  } else if (Array.isArray(klass)) {
    return klass[i - 1] || klass[0];
  } else if (typeof klass === "string") {
    return klass;
  } else {
    return "";
  }
};
</script>
