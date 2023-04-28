<!--
 * @Author: dushuai
 * @Date: 2023-04-28 17:56:22
 * @LastEditors: dushuai
 * @LastEditTime: 2023-04-28 18:19:01
 * @description: input
-->
<script setup lang='ts'>

</script>
<template>
  <div class="Message">
    <input title="Write Message" tabindex="i" pattern="\d+" placeholder="Message.." class="MsgInput" type="text">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt"
      viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet" class="SendSVG">
      <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#ffffff70" stroke="none">
        <path
          d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z">
        </path>
      </g>
    </svg><span class="l"></span>

  </div>
</template>
<style lang='scss' scoped>
svg {
  display: initial;
  vertical-align: baseline;
}

.Message {
  width: 310px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2); // 40414f
  transform: translate(0px, 0px);
  box-shadow: 5px 5px rgba(255, 255, 255, 0.25); // 34343f
}

.MsgInput {
  font-size: 18px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  outline: none;
  width: 250px;
  height: 30px;
  transform: translate(5px, -3px);
  color: #eee;
  padding: 10px;
  font-weight: bold;
}

.SendSVG {
  width: 30px;
  height: 30px;
  border-width: 50px;
  transform: translate(20px, 5px);
  background-size: 10px;
  border-radius: 10px;
  transition: 0.3s;
  border-style: hidden;
}

.SendSVG:hover {
  background-color: #2b2b35;
}

.l {
  position: absolute;
  width: 1%;
  height: 30px;
  background-color: #2e2f38;
  transform: translate(-20px, 5px);
}
</style>
