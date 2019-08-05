import { Component, Vue } from 'vue-property-decorator';

require('./index.scss');

@Component
export default class Home extends Vue {
  protected render() {
    return <div class="Home">Home</div>;
  }
}
