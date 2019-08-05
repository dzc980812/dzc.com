import { Component, Vue } from "vue-property-decorator";
//@ts-ignore
import { videoPlayer } from "vue-video-player";
import "../../assets/scss/player.scss";
import "video.js/dist/video-js.css";
import "../../router";
require("./index.scss");
const videourl = require("../../assets/video/leftnav.mp4");
@Component({
	components: {
		videoPlayer
	}
})
export default class leftNav extends Vue {
	/*   playerOptions = {
    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
    autoplay: true, //如果true,浏览器准备好时开始回放。
    controls: true, //控制条
    preload: 'auto', //视频预加载
    muted: false, //默认情况下将会消除任何音频。
    loop: false, //导致视频一结束就重新开始。
    language: 'zh-CN',
    aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [
      {
        src: videourl, // 路径
        type: 'video/mp4' // 类型
      }
    ],
    poster: require('../../assets/img/headerLogo.png'),
    width: document.documentElement.clientWidth,
    notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
  }; */
	tabs: any = [];
	created() {
		// @ts-ignore
		this.tabs = this.$router.options.routes;
	}

	render() {
		return (
			<div class="leftNav">
				{/* <videoPlayer options={this.playerOptions} class="vjs-custom-skin" /> */}
				<video
					id="viedo_player"
					class="leftNav_Video"
					autoplay="autoplay"
					//   loop="loop"
					muted="muted"
					poster={require("../../assets/img/headerLogo.png")}
					controls
				>
					<source src={videourl} />
				</video>
				<div class="left__Personal_data">
					<h2>个人资料</h2>
					<div> 姓名 ： 戴子程</div>
					<div>06年美国时代周刊风云人物 08年感动中国特别奖 google baidu公司资深CV顾问</div>
				</div>
				{this.tabs.map((res: any) => {
					return (
						<router-link to={res.path} key={res.name}>
							{res.routeName}
						</router-link>
					);
				})}
				{/*   <router-link
          to={'/'}
          key={'aa'}
          active-class="active"
          class="TabNav__link"
          exact
        >
          {'主页'}
        </router-link> */}
			</div>
		);
	}
}
