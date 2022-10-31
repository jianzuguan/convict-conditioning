import { Link } from 'react-router-dom';
import { ContentData } from '../types';
import Chest from '../data/Chest.json';
import Abs from '../data/Abs.json';
import Back from '../data/Back.json';
import Leg from '../data/Leg.json';
import Spine from '../data/Spine.json';
import Shoulder from '../data/Shoulder.json';

export default function TableOfContents() {
  return (
    <div>
      <Chapter chapterContent={Back} urlPath="back" />
      <Chapter chapterContent={Leg} urlPath="leg" />
      <Chapter chapterContent={Chest} urlPath="chest" />
      <Chapter chapterContent={Abs} urlPath="abs" />
      <Chapter chapterContent={Spine} urlPath="spine" />
      <Chapter chapterContent={Shoulder} urlPath="shoulder" />
    </div>
  );
}

function Chapter(props: { chapterContent: ContentData[]; urlPath: string }) {
  const { chapterContent, urlPath } = props;
  return (
    <ul>
      {chapterContent.map((item, index) => {
        const { title } = item;
        return (
          <li>
            <Link to={`/${urlPath}/${index + 1}`}>{title}</Link>;
          </li>
        );
      })}
    </ul>
  );
}
