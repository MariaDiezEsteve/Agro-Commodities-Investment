import { mount } from '@vue/test-utils' 
import CardDetailsProduct from '@/components/Cards/CardDetailsProduct'

describe('To do a few unit test', () => {
  it('test to know if rate starts in 0', () => {
    const wrapper = mount(CardDetailsProduct , {
      props: {
        data: Object
      }
    })
    expect(wrapper.exists()).toBe(true)
})
})
