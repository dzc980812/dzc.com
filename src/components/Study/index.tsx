import { Component, Vue } from 'vue-property-decorator';

// require('./index.scss');

@Component
export default class Study extends Vue {
  protected render() {
    return <div class="Study">Study</div>;
  }
}
