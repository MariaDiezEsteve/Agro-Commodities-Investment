 import { mount } from '@vue/test-utils'
import CardNewsButton from '@/components/Buttons/CardNewsButton'

describe("hacer test de CardNewsButton", ()=>{
    it("primer test",()=>{
        const msg = ''
        const wrapper = mount(CardNewsButton)

        expect(wrapper.html()).toBe(msg)

    })
})
