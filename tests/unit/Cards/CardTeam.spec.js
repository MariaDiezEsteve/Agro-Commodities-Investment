import { mount } from '@vue/test-utils' 
import CardTeam from '@/components/Cards/CardTeam.vue'

describe('To do a few unit test', () => {
    it('test to know if rate starts in 0', () => {
      const wrapper = mount(CardTeam)
      const msg = wrapper.get("h2")
      const text = "MEET OUR TEAM"
      expect(msg.text()).toMatch(text)
  })
})