import { mount } from '@vue/test-utils'
import SoundObject from '@/components/SoundObject.vue'

// Let’s write our first test.


describe('SoundObject.vue', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof SoundObject.data).toBe('function')
    })
})