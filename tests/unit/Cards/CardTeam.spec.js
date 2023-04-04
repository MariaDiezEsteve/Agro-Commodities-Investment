import { mount } from '@vue/test-utils' 
import CardTeam from '@/components/Cards/CardTeam.vue'

describe('To do a few unit test', () => {
  it('test to know if rate starts in 0', () => {
    const wrapper = mount(CardTeam,
      {
        id: "1",
        name: "Nasreddin Oufallah",
        discripion: "FullStack Development",
        src: require("@/assets/Avatar/myAvatar.png"),
        src1: require("@/assets/iconosRed/linkedin.png"),
        src2:require("@/assets/iconosRed/imageGit.png"),
        enlace:"https://www.linkedin.com/in/nasreddin-oufallah/",
        enlace1:"https://github.com/nasre21"
      })
      expect(wrapper.exists()).toBeTruthy()
}),
  it("a test about unit",()=>{
    const wrapper = mount(CardTeam)
    const msg = wrapper.find("h2")
    expect(msg.text()).toBe("MEET OUR TEAM")

    
  })
})