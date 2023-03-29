import { mount } from '@vue/test-utils'
import FormContact from '@/components/Forms/FormContact.vue'
describe("test FormContact",()=>{
    it("test formulario",()=>{
    const msg = '<a href="#" class="btn btn-primary">Send Message</a>'
    const wrapper = mount(FormContact)
    expect(wrapper.html()).toMatch(msg)
    
})
it("testar un unitario",()=>{
    const msg = ' <p class="card-text"> If you want to contact us you can do it with this contact form </p>'
    const wrapper = mount(FormContact)
    expect(wrapper.html()).toMatch(msg)
    
})
})