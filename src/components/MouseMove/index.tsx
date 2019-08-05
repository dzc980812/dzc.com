import { Component, Vue } from 'vue-property-decorator';

require('./index.scss');
@Component
export default class MouseMove extends Vue {
  mounted() {
    let aDiv = document.getElementsByClassName('MouseMove');
    document.onmousemove = event => {
      for (var i = aDiv.length - 1; i > 0; i--) {
        //@ts-ignore
        aDiv[i].style.left = aDiv[i - 1].style.left;
        //@ts-ignore
        aDiv[i].style.top = aDiv[i - 1].style.top;
      }
      //@ts-ignore
      aDiv[0].style.left = event.clientX + 10 + 'px';
      //@ts-ignore
      aDiv[0].style.top = event.clientY + 10 + 'px';
    };
  }
  render() {
    const arr = [1, 2, 3, 4, 5, 6];
    return (
      <div>
        {arr.map(res => {
          return (
            <div
              class="MouseMove"
              style={{
                left: res * 3 + '%',
                bottom: res * 2 + '%'
              }}
            />
          );
        })}
      </div>
    );
  }
}
