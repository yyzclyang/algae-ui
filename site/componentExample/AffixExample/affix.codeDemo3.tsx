import React from 'react';
import { Affix, Button } from 'algae-ui';

export default class extends React.Component {
  container: HTMLElement | null;

  render() {
    return (
      <div className="affix-example-list">
        <div
          ref={(ref) => (this.container = ref)}
          style={{
            height: '300px',
            overflowY: 'auto'
          }}
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <Affix offsetTop={50} target={() => this.container}>
            <Button>50px to affix container top</Button>
          </Affix>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
        </div>
      </div>
    );
  }
}
