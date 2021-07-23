import { mount } from '@vue/test-utils'
import Cat from '@/components/Cat.vue'

// Let’s write our first test.


describe('Cat.vue', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof Cat.data).toBe('function')
    })
})