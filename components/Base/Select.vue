<template>
  <q-select
    ref="selectInput"
    v-bind="$attrs"
    :model-value="model"
    @update:model-value="onChange"
    :options="options"
    :loading="loading"
    :error="!!(errorMessage || error)"
    :error-message="errorMessage || error"
    @virtual-scroll="onScroll"
    :use-input="(searchable && !model) || frontSearchable"
    @filter="filterFn"
    :display-value="displayLabel"
    :hide-dropdown-icon="false"
  >
    <!-- Custom checkbox beside each option -->
    <template v-if="checkboxOption" v-slot:option="scope">
      <q-item
        clickable
        v-bind="scope.itemProps"
        class="q-pa-none"
        active-class="my-menu-link"
      >
        <q-item-section avatar style="min-width: unset; padding-right: 0">
          <q-checkbox
            v-model="scope.selected"
            @click.stop
            :val="scope.opt[$attrs?.optionValue || $attrs['option-value']]"
          />
        </q-item-section>
        <q-item-section style="color: inherit !important">{{
          scope.opt[$attrs?.optionLabel || $attrs['option-label']]
        }}</q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { useField } from 'vee-validate'

const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  name: string
  fetchOptions?: Function
  searchable?: boolean
  frontSearchable?: boolean
  errorMessage?: string
  noValidate?: boolean
  blurOnSelect?: boolean
  defaultOptions?: any[]
  displayOptionLabel?: string
  checkboxOption?: boolean
}>()

const selectInput = useTemplateRef('selectInput')

const model = defineModel()

const options = ref<any[]>([])
const allOptions = ref<any[]>([])
const itemCount = ref<number>(0)
const loading = ref(false)
const limit = ref<number>(20)
const offset = ref<number>(0)

let error: any, handleChange: any
if (!props.noValidate) {
  const field = useField(props.name, undefined, {
    initialValue: model.value,
  })
  error = field.errorMessage
  handleChange = field.handleChange
} else {
  error = props.errorMessage
  handleChange = () => {}
}

const onChange = (val: any) => {
  handleChange(val)
  emit('update:modelValue', val)

  if (props.blurOnSelect) {
    ;(selectInput.value as any)?.blur()
  }
}
const shouldFetch = computed(() => !!props.fetchOptions)

const displayLabel = computed(() => {
  if (!props.displayOptionLabel) {
    return
  }
  const count = model.value?.length || 0
  return count === 0
    ? ''
    : `${count} ${props.displayOptionLabel}${count > 1 ? 's' : ''}`
})

// const sortedOptions = computed(() => {
//   if (!options.value) return []

//   const selected = model.value || []
//   const selectedSet = new Set(selected)

//   const getLabel = (opt: any) => {
//     const labelKey = props.optionLabel || 'label'
//     return opt?.[labelKey]?.toString() || ''
//   }

//   const getValue = (opt: any) => {
//     const valueKey = props.optionValue || 'value'
//     return opt?.[valueKey]
//   }

//   const selectedOptions = options.value
//     .filter(opt => selectedSet.has(getValue(opt)))
//     .sort((a, b) => getLabel(a).localeCompare(getLabel(b)))

//   const unselectedOptions = options.value
//     .filter(opt => !selectedSet.has(getValue(opt)))
//     .sort((a, b) => getLabel(a).localeCompare(getLabel(b)))

//   return [...selectedOptions, ...unselectedOptions]
// })

const fetchNextPage = async (search?: string) => {
  loading.value = true
  try {
    if (shouldFetch.value) {
      // offset will break the search results, so it should not be included
      const fetchOptions = props.searchable
        ? { search: search }
        : {
            limit: limit.value,
            offset: offset.value,
            search: search,
          }
      const { results, count } = await props.fetchOptions?.(fetchOptions)

      if (results?.length > 0) {
        options.value = props.searchable
          ? results
          : [...options.value, ...results]
        offset.value += limit.value
        itemCount.value = count
      }
    } else {
      options.value = props.defaultOptions || []
    }
  } catch (error) {
    console.log({ error })

    // handleError(error, 'Fetch Options')
  } finally {
    loading.value = false
  }
}

const onScroll = async ({
  to,
  from,
  index,
  ref,
}: {
  to: number
  from: number
  index: number
  ref: any
}) => {
  const lastIndex = options.value.length - 1
  offset.value = lastIndex + 1

  if (
    to === lastIndex &&
    index !== 0 &&
    options.value.length < itemCount.value &&
    !loading.value
  ) {
    await fetchNextPage()
    nextTick(() => ref.refresh())
  }
}

const filterFn = (val: any, update: Function, abort: Function) => {
  if (props.frontSearchable) {
    if (!val) {
      options.value = allOptions.value
    } else {
      options.value = allOptions.value.filter(option =>
        option.value?.toLowerCase().includes(val.toLowerCase()),
      )
    }
    update(() => options.value)
    return
  }
  if (!props.searchable) {
    update()
    return
  }

  if (!val || val.length < 3) {
    abort()
    return
  }

  fetchNextPage(val)
    .then(() => {
      update()
    })
    .catch(() => {
      abort()
    })
}

watch(model, (newVal, oldValue) => {
  if (!_.isEqual(newVal, oldValue)) {
    handleChange(newVal, false)
  }
})

watch(
  () => props.defaultOptions,
  newDefaultOptions => {
    options.value = newDefaultOptions || []
  },
)

onMounted(async () => {
  if (!props.searchable) {
    await fetchNextPage()
    allOptions.value = options.value
  }
})
</script>

<style scoped>
.my-menu-link {
  color: black;
}
</style>