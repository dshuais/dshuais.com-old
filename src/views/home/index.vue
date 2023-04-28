<!--
 * @Author: dushuai
 * @Date: 2023-04-24 21:20:50
 * @LastEditors: dushuai
 * @LastEditTime: 2023-04-28 17:39:10
 * @description: index
-->
<script setup lang='ts'>
import vueDanmaku from 'vue3-danmaku'
import { randomNum } from '@/utils'

const helloList = reactive<string[]>([
  '你好啊<br />我是dshuai<br />很高兴认识你。',
  '我们所经历的每个平凡的日常，<br />也许就是连续发生的奇迹。',
  '人生本是梦中最精彩的绽放。',
  '少年的锐利足以划破无尽的黑夜。',
  '大脑处理新信息时会觉的时间变慢，<br />探索让我们感觉活得更久。<br />愿你的 2023也是如此。',
  '我们坠落，破碎，掉入深渊，<br />但我们终会被托起，被治愈，我们无所畏惧。',
  '保持你的态度，<br />继续锋利地走下去。',
  '尽力为明天做周全的考虑，<br />谨慎地思考规划准备，但不要忧虑。',
  '给自己一个希望，不为昨天烦恼，不为明天迷惘，<br />只为今天更美好。',
  '心情不好的时候，就看看窗外，世界很大风景很美。',
  '抓住机遇，深化改革。',
  '自己的命运掌握在自己的手中。',
  '和平年代，金钱论成败。',
  '做事不讲礼仪，就不会成功。',
  '会吃醋，会自卑，会心酸，会想你，<br />这大概就是喜欢你的味道。',
  '别怪生活不如意，该得到的都会有，<br />别埋怨，好好过。',
  '最大的痛苦不是失败<br />是我本可以.',
  '当你要选择放弃的时候，想一想是什么让你走到了这里',
  '别紧张，深呼吸，坚持住，扛过去。',
  '我绝不能死在明天晚上，<br />我要看见后天早上的太阳！',
  '月亮本无光，努力久了便会万丈光芒。',
  '生如芥子,心藏须弥。',
  '我想有一个露天的阳台，<br />周末的午后，和三两好友捧一杯咖啡，叙叙旧，<br />聊聊现在，想想未来。',
  '若故人不再重逢，<br />那么一切平安顺利也算最好的答复。',
  '少日春怀私酒浓，插花走马醉千钟。',
  '我是旧时代的残党，<br />新时代没有能承载我的船。',
  '欲买桂花同载酒，终不似，少年游。'
])

const danmus = ref<string[]>(
  ["INTJ-A", "没梦想的社畜", "死宅", "社恐", "不善争吵", "是个笨蛋", "恋爱脑", "不混圈子", "实用至上", "我不想卷", "颜文字爱好者(´･ω･`)", "学艺不精的前端工程师", "见习产品经理", "CRUD编写师", "摸鱼学资深学者", "数据控", "摸鱼的king", "热爱睡懒觉", "脑洞极大", "喜欢钱（谁不喜欢呢", "喜欢唱歌但劣质", "喜欢写字但没营养", "喜欢拍照但没技术", "夜喵本喵", "彩票中奖计划师", "那本《自控力》的书，买来以后就没看过", "甜党人士卧底辣省", "云养猫用户", "把PDD薅的黑了号", "Nichijou", "钢炼一生推", "冰菓", "CLANNAD", "BIG BANG!", "武林外传", "三体宇宙", "目标：NH558J2", "弱小和无知不是生存的障碍，傲慢才是", "4399", "单机云玩家", "喜+1（可是我没有Money", "CSGO社区服玩家", "To the Moon", "LOL白银分段混子", "MC高铁计划通✓", "靠BeatSaber减肥", "让子弹飞申遗", "Run! forrest run", "洛天依", "幼稚园杀手", "反光镜", "我没听出来你的flow", "什么音乐都听一点点", "被MIUI绑架的资深米黑", "Mac党", "智能家居爱好者", "没有耳机不能出门", "两个空格缩进党", "VS Code", "这个做不了", "我什么都没做就出BUG了", "我写了这么多居然没出BUG？", "今天工作了15分钟，好累哦", "HZFE底层群友", "被遗忘的 Lingoys!Art", "知乎公共领域编辑计划", "吃花椒的瓜酱", "察觉时已是鸽骑"]
)

const list = reactive<Res.MeListRes[]>([
  {
    key: '找到我',
    val: [
      { name: '博客', url: 'https://blog.dshuais.com' },
      { name: 'GitHub', url: 'https://github.com/dshuais' }
    ]
  }
])

const random = ref<number>(randomNum(0, helloList.length))
function handleReload() {
  let num = randomNum(0, helloList.length)
  while (num === random.value && helloList.length > 1) {
    num = randomNum(0, helloList.length)
  }
  random.value = num
}

function handleJump(url: string) {
  window.open(url, url)
}

// busuanzi
const countScript = document.createElement('script')
countScript.async = true
countScript.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
document.body.append(countScript)
</script>
<template>
  <vue-danmaku :danmus="danmus" loop :top="20" :right="200" :speeds="180"
    class="w-full h-screen absolute top-0 bg-[#202124]">
    <div class="w-full h-screen text-[#eee] flex justify-center flex-col items-center tracking-widest z-10 absolute">
      <div>
        <div class="text-[30px] font-bold italic mb-5 cursor-pointer" @click="handleReload" v-html="helloList[random]">
        </div>
        <div class="leading-relaxed">
          <div class="text-[16px]">弹幕：<span class="border-b-[1px] cursor-pointer">戳这里</span></div>
          <div v-for="(item, index) in list" :key="index">
            <div class="text-[16px]">{{ item.key }}：<span class="mr-3 cursor-pointer" v-for="(v, ind) in item.val"
                :key="ind" @click="handleJump(v.url)">{{
                  v.name }}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-1 text-[#555] text-[12px] text-center w-full z-10">
      <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022011303号-1</a>
      <div>Copyright © 2015 - {{ new Date().getFullYear() }} dshuai | 访问量<span id="busuanzi_value_site_pv"></span>
      </div>
    </div>
  </vue-danmaku>
</template>
<style lang='scss' scoped></style>
