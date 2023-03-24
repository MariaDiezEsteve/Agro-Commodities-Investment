 import { mount } from '@vue/test-utils'
import CardNewsButton from '@/components/Buttons/CardNewsButton'

describe("hacer test de CardNewsButton", ()=>{
    it("primer test",()=>{
        const msg = "<div class=\"buttones\"><button type=\"button\" class=\"butn-card bg-white text-black\">Back</button><button type=\"button\" class=\"butn-cards bg-black text-white\">Next</button></div>"
        const wrapper = mount(CardNewsButton)

        expect(wrapper.html()).toBe(msg)

    })
})
