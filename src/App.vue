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
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              🔍 查询栏
            </p>
          </header>
          <div class="card-content">
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
        </div>
        <div v-if="baseInfo !== undefined">
          <BaseInfo :base-info-data="baseInfo"></BaseInfo>
        </div>
        <div v-if="abyssInfo !== undefined">
          <AbyssInfo :abyss-info-data="abyssInfo"></AbyssInfo>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import BaseInfo from './components/BaseInfo.vue'
import AbyssInfo from './components/AbyssInfo.vue'

export default {
  name: 'App',
  components: {BaseInfo, AbyssInfo},
  data() {
    return {
      uid: '',
      baseInfo: {},
      abyssInfo: {},

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
      let obj2 = {
        "retcode": 0,
        "message": "OK",
        "data": {
          "schedule_id": 27,
          "start_time": "1627761600",
          "end_time": "1629057599",
          "total_battle_times": 17,
          "total_win_times": 15,
          "max_floor": "12-3",
          "reveal_rank": [
            {
              "avatar_id": 10000022,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
              "value": 12,
              "rarity": 5
            },
            {
              "avatar_id": 10000031,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
              "value": 12,
              "rarity": 4
            },
            {
              "avatar_id": 10000016,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
              "value": 12,
              "rarity": 5
            },
            {
              "avatar_id": 10000035,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
              "value": 12,
              "rarity": 5
            },
            {
              "avatar_id": 10000037,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
              "value": 12,
              "rarity": 5
            },
            {
              "avatar_id": 10000026,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
              "value": 12,
              "rarity": 5
            },
            {
              "avatar_id": 10000002,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
              "value": 9,
              "rarity": 5
            },
            {
              "avatar_id": 10000003,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
              "value": 6,
              "rarity": 5
            },
            {
              "avatar_id": 10000030,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
              "value": 6,
              "rarity": 5
            },
            {
              "avatar_id": 10000014,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
              "value": 3,
              "rarity": 4
            }
          ],
          "defeat_rank": [
            {
              "avatar_id": 10000016,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Diluc.png",
              "value": 26,
              "rarity": 5
            },
            {
              "avatar_id": 10000037,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png",
              "value": 23,
              "rarity": 5
            },
            {
              "avatar_id": 10000022,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Venti.png",
              "value": 21,
              "rarity": 5
            },
            {
              "avatar_id": 10000026,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Xiao.png",
              "value": 17,
              "rarity": 5
            },
            {
              "avatar_id": 10000002,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ayaka.png",
              "value": 16,
              "rarity": 5
            },
            {
              "avatar_id": 10000031,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Fischl.png",
              "value": 14,
              "rarity": 4
            },
            {
              "avatar_id": 10000003,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qin.png",
              "value": 4,
              "rarity": 5
            },
            {
              "avatar_id": 10000035,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qiqi.png",
              "value": 2,
              "rarity": 5
            },
            {
              "avatar_id": 10000030,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Zhongli.png",
              "value": 1,
              "rarity": 5
            }
          ],
          "damage_rank": [
            {
              "avatar_id": 10000037,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png",
              "value": 61523,
              "rarity": 5
            }
          ],
          "take_damage_rank": [
            {
              "avatar_id": 10000016,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Diluc.png",
              "value": 160867,
              "rarity": 5
            },
            {
              "avatar_id": 10000035,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qiqi.png",
              "value": 109110,
              "rarity": 5
            },
            {
              "avatar_id": 10000031,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Fischl.png",
              "value": 82006,
              "rarity": 4
            },
            {
              "avatar_id": 10000026,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Xiao.png",
              "value": 58600,
              "rarity": 5
            },
            {
              "avatar_id": 10000022,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Venti.png",
              "value": 54617,
              "rarity": 5
            },
            {
              "avatar_id": 10000002,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ayaka.png",
              "value": 30465,
              "rarity": 5
            },
            {
              "avatar_id": 10000003,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qin.png",
              "value": 28864,
              "rarity": 5
            },
            {
              "avatar_id": 10000037,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png",
              "value": 28784,
              "rarity": 5
            },
            {
              "avatar_id": 10000030,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Zhongli.png",
              "value": 10805,
              "rarity": 5
            }
          ],
          "normal_skill_rank": [
            {
              "avatar_id": 10000016,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Diluc.png",
              "value": 85,
              "rarity": 5
            },
            {
              "avatar_id": 10000022,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Venti.png",
              "value": 71,
              "rarity": 5
            },
            {
              "avatar_id": 10000026,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Xiao.png",
              "value": 62,
              "rarity": 5
            },
            {
              "avatar_id": 10000035,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qiqi.png",
              "value": 46,
              "rarity": 5
            },
            {
              "avatar_id": 10000037,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png",
              "value": 35,
              "rarity": 5
            },
            {
              "avatar_id": 10000031,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Fischl.png",
              "value": 30,
              "rarity": 4
            },
            {
              "avatar_id": 10000002,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ayaka.png",
              "value": 28,
              "rarity": 5
            },
            {
              "avatar_id": 10000003,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qin.png",
              "value": 20,
              "rarity": 5
            },
            {
              "avatar_id": 10000030,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Zhongli.png",
              "value": 18,
              "rarity": 5
            },
            {
              "avatar_id": 10000014,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Barbara.png",
              "value": 5,
              "rarity": 4
            }
          ],
          "energy_skill_rank": [
            {
              "avatar_id": 10000016,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Diluc.png",
              "value": 77,
              "rarity": 5
            },
            {
              "avatar_id": 10000022,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Venti.png",
              "value": 43,
              "rarity": 5
            },
            {
              "avatar_id": 10000037,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png",
              "value": 19,
              "rarity": 5
            },
            {
              "avatar_id": 10000031,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Fischl.png",
              "value": 18,
              "rarity": 4
            },
            {
              "avatar_id": 10000002,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ayaka.png",
              "value": 17,
              "rarity": 5
            },
            {
              "avatar_id": 10000035,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qiqi.png",
              "value": 14,
              "rarity": 5
            },
            {
              "avatar_id": 10000003,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Qin.png",
              "value": 11,
              "rarity": 5
            },
            {
              "avatar_id": 10000026,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Xiao.png",
              "value": 9,
              "rarity": 5
            },
            {
              "avatar_id": 10000030,
              "avatar_icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Zhongli.png",
              "value": 3,
              "rarity": 5
            }
          ],
          "floors": [
            {
              "index": 8,
              "icon": "",
              "is_unlock": true,
              "settle_time": "0",
              "star": 9,
              "max_star": 9,
              "levels": [
                {
                  "index": 1,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627803683",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627803728",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000014,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                          "level": 71,
                          "rarity": 4
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 2,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627803772",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627803809",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000014,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                          "level": 71,
                          "rarity": 4
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 3,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627803898",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627803938",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000014,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                          "level": 71,
                          "rarity": 4
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "index": 9,
              "icon": "",
              "is_unlock": true,
              "settle_time": "0",
              "star": 9,
              "max_star": 9,
              "levels": [
                {
                  "index": 1,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627799541",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627799651",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 2,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627799689",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627799760",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 3,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627799833",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627799906",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "index": 10,
              "icon": "",
              "is_unlock": true,
              "settle_time": "0",
              "star": 9,
              "max_star": 9,
              "levels": [
                {
                  "index": 1,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627800064",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627800142",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 2,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627800215",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627800251",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 3,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627800300",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627800378",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "index": 11,
              "icon": "",
              "is_unlock": true,
              "settle_time": "0",
              "star": 8,
              "max_star": 9,
              "levels": [
                {
                  "index": 1,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627800517",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627800642",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000014,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                          "level": 71,
                          "rarity": 4
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 2,
                  "star": 3,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627800677",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627800786",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000014,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                          "level": 71,
                          "rarity": 4
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 3,
                  "star": 2,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627800868",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627800986",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000014,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                          "level": 71,
                          "rarity": 4
                        },
                        {
                          "id": 10000030,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "index": 12,
              "icon": "",
              "is_unlock": true,
              "settle_time": "0",
              "star": 3,
              "max_star": 9,
              "levels": [
                {
                  "index": 1,
                  "star": 1,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627801406",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627801557",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 2,
                  "star": 1,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627801740",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627801838",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    }
                  ]
                },
                {
                  "index": 3,
                  "star": 1,
                  "max_star": 3,
                  "battles": [
                    {
                      "index": 1,
                      "timestamp": "1627802096",
                      "avatars": [
                        {
                          "id": 10000026,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000003,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                          "level": 81,
                          "rarity": 5
                        },
                        {
                          "id": 10000002,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000037,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
                          "level": 90,
                          "rarity": 5
                        }
                      ]
                    },
                    {
                      "index": 2,
                      "timestamp": "1627802203",
                      "avatars": [
                        {
                          "id": 10000016,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000035,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                          "level": 80,
                          "rarity": 5
                        },
                        {
                          "id": 10000022,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
                          "level": 90,
                          "rarity": 5
                        },
                        {
                          "id": 10000031,
                          "icon": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                          "level": 90,
                          "rarity": 4
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "total_star": 38,
          "is_unlock": true
        }
      };
      this.baseInfo = obj.data;
      this.abyssInfo = obj2.data;
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

.star-5 {
  background-color: #be844e;
}

.star-4 {
  background-color: #7968a2;
}

.avatar-card {
  width: 100px;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
}

.avatar-card .desc {
  background-color: #f1f1f1;
  border-radius: 0 0 0.25rem 0.25rem;
  text-align: center;
}
</style>
