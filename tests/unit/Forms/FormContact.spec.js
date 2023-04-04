import { mount } from '@vue/test-utils'
import FormContact from '@/components/Forms/FormContact.vue'
describe("test FormContact",()=>{
    it("test form",()=>{
    const msg = '<a href="#" class="btn btn-primary">Send Message</a>'
    const wrapper = mount(FormContact)
    expect(wrapper.html()).toMatch(msg) 
})
it("test unit",()=>{
  
    const wrapper = mount(FormContact)
    const msg = wrapper.get("h5")
    const text= "Contact Form"
    expect(msg.html()).toMatch(text)
    
})
it("test  href",()=>{
   
    const wrapper = mount(FormContact)
    const msg = wrapper.get("a")
    console.log(msg)
    expect(msg.html()).toMatch("Send Message")
})
it("test a p",()=>{
   
    const wrapper = mount(FormContact)
    const msg = wrapper.findAll("a")
    console.log(msg)
    expect(msg).toHaveLength(1)
})

it("test a span", ()=>{
    const wrapper = mount(FormContact)
    const msg = wrapper.findAll("p")
    expect(msg).toHaveLength(1)
})
it("test a p", ()=> {
    const wrapper = mount(FormContact)
    const msg = wrapper.get("p")
    expect(msg.text()).toContain("If you want to contact us you can do it with this contact form")
})

})

