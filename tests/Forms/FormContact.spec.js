import { mount } from '@vue/test-utils'
import FormContact from '@/components/Forms/FormContact.vue'
describe("test FormContact",()=>{
    it("test formulario",()=>{
    const msg = "Send Message"
    const wrapper = mount(FormContact)
    expect(wrapper.exists()).toBe(msg)
    
})
})