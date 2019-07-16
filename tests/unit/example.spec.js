import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Increment'
    const wrapper = shallowMount(Counter, {
      propsData: {
        msg: msg
      }
    })
    expect(wrapper.text()).toMatch('Increment')
  })
})
// import { shallowMount } from '@vue/test-utils'
// import slides from '@/components/slides.vue'
// const bazComponent = {
//   name: 'baz-component',
//   template: '<p>baz</p>'
// }

// const wrapper = shallowMount(Component, {
//   slots: {
//     default: [slides, '<my-component />', 'text'],
//     media: slides, // Will match `<slot name="FooBar" />`.
//     qux: '<my-component />'
//   }
// })

// expect(wrapper.find('div')).toBe(true)