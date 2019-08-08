import { Component, Vue } from "vue-property-decorator";
import "@/router";
require("./index.scss");
const videourl = require("../../assets/video/leftnav.mp4");
@Component({
	components: {}
})
export default class leftNav extends Vue {
	tabs: any = [];
	created() {
		// @ts-ignore
		this.tabs = this.$router["options"].routes;
	}

	render() {
		return (
			<div class="leftNav">
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
			</div>
		);
	}
}
