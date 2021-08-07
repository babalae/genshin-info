<template>
  <div id="app">
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          原神角色信息查询
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <section class="section">
      <div class="container">
        <div class="field has-addons">
          <p class="control">
            <input id="uid" class="input" type="text" placeholder="请输入UID" v-model="uid" @keyup.enter="search">
          </p>
          <p class="control">
            <a class="button is-info" :class="{'is-loading': searching}" @click="search">查询</a>
          </p>
        </div>
        <article class="message" :class="tipsClass">
          <div class="message-body">
            {{ tips }}
          </div>
        </article>
      </div>
    </section>
    <section class="section" v-if="baseInfo.stats !== undefined">
      <BaseInfo :base-info-data="baseInfo"></BaseInfo>
    </section>
  </div>
</template>

<script>
import BaseInfo from './components/BaseInfo.vue'
export default {
  name: 'App',
  components: { BaseInfo },
  data() {
    return {
      uid: '',
      baseInfo: [],

      tips: '请输入UID点击查询',
      tipsClass: '',
      searching: false
    }
  },
  mounted() {
  },
  methods: {
    search() {
      let obj = {
        "retcode": 0,
        "message": "OK",
        "data": {
          "role": null,
          "avatars": [
            {
              "id": 10000016,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
              "name": "迪卢克",
              "element": "Pyro",
              "fetter": 10,
              "level": 90,
              "rarity": 5,
              "actived_constellation_num": 0
            },
            {
              "id": 10000022,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
              "name": "温迪",
              "element": "Anemo",
              "fetter": 10,
              "level": 90,
              "rarity": 5,
              "actived_constellation_num": 0
            },
            {
              "id": 10000031,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
              "name": "菲谢尔",
              "element": "Electro",
              "fetter": 10,
              "level": 90,
              "rarity": 4,
              "actived_constellation_num": 6
            },
            {
              "id": 10000037,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
              "name": "甘雨",
              "element": "Cryo",
              "fetter": 10,
              "level": 90,
              "rarity": 5,
              "actived_constellation_num": 0
            },
            {
              "id": 10000003,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
              "name": "琴",
              "element": "Anemo",
              "fetter": 10,
              "level": 81,
              "rarity": 5,
              "actived_constellation_num": 0
            },
            {
              "id": 10000026,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
              "name": "魈",
              "element": "Anemo",
              "fetter": 10,
              "level": 81,
              "rarity": 5,
              "actived_constellation_num": 0
            },
            {
              "id": 10000023,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiangling.png",
              "name": "香菱",
              "element": "Pyro",
              "fetter": 10,
              "level": 80,
              "rarity": 4,
              "actived_constellation_num": 6
            },
            {
              "id": 10000035,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
              "name": "七七",
              "element": "Cryo",
              "fetter": 10,
              "level": 80,
              "rarity": 5,
              "actived_constellation_num": 1
            },
            {
              "id": 10000014,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
              "name": "芭芭拉",
              "element": "Hydro",
              "fetter": 10,
              "level": 71,
              "rarity": 4,
              "actived_constellation_num": 5
            },
            {
              "id": 10000030,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
              "name": "钟离",
              "element": "Geo",
              "fetter": 6,
              "level": 80,
              "rarity": 5,
              "actived_constellation_num": 0
            },
            {
              "id": 10000002,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
              "name": "神里绫华",
              "element": "Cryo",
              "fetter": 5,
              "level": 80,
              "rarity": 5,
              "actived_constellation_num": 0
            },
            {
              "id": 10000034,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Noel.png",
              "name": "诺艾尔",
              "element": "Geo",
              "fetter": 5,
              "level": 80,
              "rarity": 4,
              "actived_constellation_num": 6
            },
            {
              "id": 10000039,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diona.png",
              "name": "迪奥娜",
              "element": "Cryo",
              "fetter": 5,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 2
            },
            {
              "id": 10000045,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Rosaria.png",
              "name": "罗莎莉亚",
              "element": "Cryo",
              "fetter": 5,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 1
            },
            {
              "id": 10000048,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Feiyan.png",
              "name": "烟绯",
              "element": "Pyro",
              "fetter": 5,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 2
            },
            {
              "id": 10000032,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Bennett.png",
              "name": "班尼特",
              "element": "Pyro",
              "fetter": 4,
              "level": 71,
              "rarity": 4,
              "actived_constellation_num": 2
            },
            {
              "id": 10000024,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Beidou.png",
              "name": "北斗",
              "element": "Electro",
              "fetter": 4,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 3
            },
            {
              "id": 10000027,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ningguang.png",
              "name": "凝光",
              "element": "Geo",
              "fetter": 4,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 3
            },
            {
              "id": 10000043,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sucrose.png",
              "name": "砂糖",
              "element": "Anemo",
              "fetter": 4,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 1
            },
            {
              "id": 10000021,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png",
              "name": "安柏",
              "element": "Pyro",
              "fetter": 3,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 0
            },
            {
              "id": 10000025,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xingqiu.png",
              "name": "行秋",
              "element": "Hydro",
              "fetter": 2,
              "level": 71,
              "rarity": 4,
              "actived_constellation_num": 6
            },
            {
              "id": 10000006,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Lisa.png",
              "name": "丽莎",
              "element": "Electro",
              "fetter": 2,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 0
            },
            {
              "id": 10000015,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kaeya.png",
              "name": "凯亚",
              "element": "Cryo",
              "fetter": 1,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 1
            },
            {
              "id": 10000020,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Razor.png",
              "name": "雷泽",
              "element": "Electro",
              "fetter": 1,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 1
            },
            {
              "id": 10000036,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Chongyun.png",
              "name": "重云",
              "element": "Cryo",
              "fetter": 1,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 4
            },
            {
              "id": 10000044,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xinyan.png",
              "name": "辛焱",
              "element": "Pyro",
              "fetter": 1,
              "level": 20,
              "rarity": 4,
              "actived_constellation_num": 4
            },
            {
              "id": 10000005,
              "image": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
              "name": "旅行者",
              "element": "Electro",
              "fetter": 0,
              "level": 80,
              "rarity": 5,
              "actived_constellation_num": 3
            }
          ],
          "stats": {
            "active_day_number": 317,
            "achievement_number": 346,
            "win_rate": 0,
            "anemoculus_number": 66,
            "geoculus_number": 131,
            "avatar_number": 27,
            "way_point_number": 112,
            "domain_number": 28,
            "spiral_abyss": "12-3",
            "precious_chest_number": 237,
            "luxurious_chest_number": 94,
            "exquisite_chest_number": 878,
            "common_chest_number": 952,
            "electroculus_number": 94
          },
          "city_explorations": [],
          "world_explorations": [
            {
              "level": 5,
              "exploration_percentage": 1000,
              "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/city_icon/UI_ChapterIcon_Daoqi.png",
              "name": "稻妻",
              "type": "Reputation",
              "offerings": [
                {
                  "name": "神樱眷顾",
                  "level": 20
                }
              ],
              "id": 4
            },
            {
              "level": 12,
              "exploration_percentage": 978,
              "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/city_icon/UI_ChapterIcon_Dragonspine.png",
              "name": "龙脊雪山",
              "type": "Offering",
              "offerings": [
                {
                  "name": "忍冬之树",
                  "level": 12
                }
              ],
              "id": 3
            },
            {
              "level": 8,
              "exploration_percentage": 977,
              "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/city_icon/UI_ChapterIcon_Liyue.png",
              "name": "璃月",
              "type": "Reputation",
              "offerings": [],
              "id": 2
            },
            {
              "level": 8,
              "exploration_percentage": 1000,
              "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/city_icon/UI_ChapterIcon_Mengde.png",
              "name": "蒙德",
              "type": "Reputation",
              "offerings": [],
              "id": 1
            }
          ],
          "homes": [
            {
              "level": 10,
              "visit_num": 10,
              "comfort_num": 20570,
              "item_num": 621,
              "name": "罗浮洞",
              "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/home/UI_HomeworldModule_2_Pic.png",
              "comfort_level_name": "贝阙珠宫",
              "comfort_level_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/home/UI_Homeworld_Comfort_10.png"
            },
            {
              "level": 10,
              "visit_num": 10,
              "comfort_num": 20570,
              "item_num": 621,
              "name": "翠黛峰",
              "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/home/UI_HomeworldModule_1_Pic.png",
              "comfort_level_name": "贝阙珠宫",
              "comfort_level_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/home/UI_Homeworld_Comfort_10.png"
            },
            {
              "level": 10,
              "visit_num": 10,
              "comfort_num": 20570,
              "item_num": 621,
              "name": "清琼岛",
              "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/home/UI_HomeworldModule_3_Pic.png",
              "comfort_level_name": "贝阙珠宫",
              "comfort_level_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/home/UI_Homeworld_Comfort_10.png"
            }
          ]
        }
      };
      this.baseInfo = obj.data;
      this.uid = document.querySelector('#uid').value
      if (this.uid === null || this.uid === undefined || this.uid === '') {
        this.tips = '👆 请输入UID'
        this.tipsClass = 'is-warning'
        return
      }
      this.searching = true
      this.tips = '查询中，请耐心等待...'
      this.tips = 'UID: ' + this.uid + ' 查询成功'
      this.tipsClass = 'is-success'
      this.searching = false
      // fetch('//service-joam13r8-1252025612.gz.apigw.tencentcs.com/uid/' + this.uid, {
      //   method: 'GET',
      //   mode: 'cors',
      // }).then(res => res.json()).then(json => {
      //   if (json.retcode == 0) {
      //     this.baseInfo = json.data
      //     this.tips = 'UID: ' + this.uid + ' 查询成功'
      //     this.tipsClass = 'is-success'
      //   } else if (json.retcode == -1) {
      //     this.tips = '查询无结果，可能造成这种情况的原因：1.UID不存在 2.没有在米游社同步并公开角色信息'
      //     this.tipsClass = 'is-warning'
      //   } else {
      //     this.tips = '查询失败！' + json.message
      //     this.tipsClass = 'is-danger'
      //   }
      //   this.searching = false
      // })
    }
  }
}
</script>

<style>
#app {
  /*background-color: #e2e2e2;*/
}

.avatars-box {
  display: flex;
  flex-wrap: wrap;
}

.avatar-content {
  width: 100%;
  padding: 0.5rem 1rem;
}

@media screen and (min-width: 768px) {
  .avatar-content {
    width: 50%;
    padding: 0.5rem 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .avatar-content {
    width: 25%;
    padding: 0.5rem 1rem;
  }
}

.level-item-custom {
  width: 25%;
}

.heading-custom {
  font-size: 16px !important;
}

.title-custom {
  font-size: 1.75rem !important;
  font-weight: 470 !important;
  line-height: 1 !important;
}
</style>
