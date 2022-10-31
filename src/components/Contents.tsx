import Move from '../components/Move';

interface Props {
  contents: {
    title: string;
    description: string;
    img: {
      src: string;
      alt: string;
    }[];
    breakdown: string;
    objective: string[];
    progression: string;
  }[];
}

export default function Contents(props: Props) {
  const { contents } = props;
  return (
    <div>
      {contents.map((move, index) => {
        const { title, description, img, breakdown, objective, progression } =
          move;
        return (
          <Move id={`${index + 1}`}>
            <div>
              <h3>{title}</h3>

              <h4>动作</h4>
              <p>{description}</p>
              {img.map((imgItem) => {
                const { src, alt } = imgItem;
                return (
                  <div>
                    <img
                      width={250}
                      alt={alt}
                      src={`/convict-conditioning/img/${src}`}
                    />
                    <p>{alt}</p>
                  </div>
                );
              })}
              <h4>解析</h4>
              <p>{breakdown}</p>
              <h4>训练目标</h4>
              <ul>
                {objective.map((obj) => (
                  <li>{obj}</li>
                ))}
              </ul>
              <h4>稳扎稳打</h4>
              <p>{progression}</p>
            </div>
          </Move>
        );
      })}
    </div>
  );
}
