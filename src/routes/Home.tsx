import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>我就是把囚徒健身里我需要的部分拉出来。 方便我自己查找用的。</p>

      <h3>周一 周四</h3>
      <ul>
        <li>
          <Link to="/back/2">引体向上 第二式　水平引体向上</Link>
        </li>
        <li>
          <Link to="/leg/5">深蹲 第五式　标准深蹲</Link>
        </li>
      </ul>

      <h3>周二 周五</h3>
      <ul>
        <li>
          <Link to="/chest/4">俯卧撑 第四式　半俯卧撑</Link>
        </li>
        <li>
          <Link to="/abs/3">举腿 第三式　平卧屈举腿</Link>
        </li>
      </ul>

      <h3>周三 周六</h3>
      <ul>
        <li>
          <Link to="/spine/3">下腰 第三式　高低桥</Link>
        </li>
        <li>
          <Link to="/shoulder/2">倒立撑 第二式　乌鸦式</Link>
        </li>
      </ul>
    </div>
  );
}
