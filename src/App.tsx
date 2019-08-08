import Vue from "vue";
import Header from "@/components/Header";
import LeftNav from "@/components/LeftNav";
import MouseMove from "@/components/MouseMove";
import mouseClick from "../src/utils/mouseClick";
import { Component, Watch } from "vue-property-decorator";

require("./style/common/global.scss");
require("./style/common/index.scss");

@Component<App>({
	components: { MouseMove }
})
export default class App extends Vue {
	mounted() {
		mouseClick();
	}

	render() {
		return (
			<div id="app">
				<Header />
				<div class="app__body">
					<LeftNav />
					<router-view />
				</div>
			</div>
		);
	}
}
