import { mount } from '@vue/test-utils'
import Cat from '@/components/Cat.vue'

describe('Cat.vue', () => {
  test("if Cat figure clicked once for first time, it should add 100 points to the score", () =>{
      const wrapper = mount(playCat)

      expect(wrapper.vm.playCat()).toBe(100)
  })
})






// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
