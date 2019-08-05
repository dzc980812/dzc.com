import { Component, Vue } from "vue-property-decorator";
import moment from "moment";
import axios from "axios";
import { getTime } from "@/apiManage/apiServer";

require("./index.scss");

@Component<HeaderNav>({})
export default class HeaderNav extends Vue {
	// 问候语
	hello: String = "";
	// 当前时间
	nowTime: any = "";
	serverTime: any = "";
	diff: any; //相差几天
	created() {
		// 获取服务器时间
		getTime().then(res => {
            this.serverTime = res.data.time;
            this.nowTime = moment(this.serverTime).format("YYYY-MM-DD HH:mm:ss");
			this.diff = Math.floor((this.serverTime - 1533139200000) / (24 * 60 * 60 * 1000)); //相差几天
			this.getHour();
			this.timeFun();
		});
	}
	mounted() {}

	// 实时时间
	timeFun() {
		setInterval(() => {
			this.nowTime = moment((this.serverTime += 1000)).format("YYYY-MM-DD HH:mm:ss");
		}, 1000);
	}
	// 判断早中晚
	getHour() {
		let Hours = moment(this.nowTime).get("hours");
		if (Hours >= 0 && Hours < 4) {
			this.hello = "深夜了，注意身体哦。";
			return;
		}
		if (Hours >= 4 && Hours < 6) {
			this.hello = "清晨好，起的真早啊。";
			return;
		}
		if (Hours >= 6 && Hours < 9) {
			this.hello = "早上好，女士们，先生们！";
			return;
		}
		if (Hours >= 9 && Hours < 11) {
			this.hello = "上午好，我们一起加油工作学习吧~";
			return;
		}
		if (Hours >= 11 && Hours < 13) {
			this.hello = "中午好，别太为难自己的肚子哦~";
			return;
		}
		if (Hours >= 13 && Hours < 17) {
			this.hello = "下午好，今天外面的天气怎么样？";
			return;
		}
		if (Hours >= 17 && Hours < 19) {
			this.hello = "傍晚好，要我们一起出去散散步吗？";
			return;
		}
		if (Hours >= 19 && Hours < 24) {
			this.hello = "晚上好，小伙伴们让我们一起网上冲浪~";
			return;
		}
	}
	render() {
		return (
			<div class="HeaderContent">
				<div class="HeaderContent__Left">
					<img src={require("../../assets/img/headerLogo.png")} alt="" />
					<h3 class="HeaderContent__Left__title">两只前端汪的日常</h3>
				</div>
				<div class="HeaderContent__Center">
					{this.hello}欢迎您光临我们的小站当前时间为:
					<span>{this.nowTime}</span>
				</div>
				<div class="HeaderContent__Right">
					我们已经在一起<span>{this.diff}</span>天啦
				</div>
			</div>
		);
	}
}
