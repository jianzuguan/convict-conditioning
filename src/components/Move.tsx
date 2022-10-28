import { ReactNode, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  children: ReactNode;
  id: string;
}

export default function Move(props: Props) {
  const { children, id } = props;

  const { id: urlParamId } = useParams();

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current && urlParamId === id) {
      divRef.current.scrollIntoView();
    }
  }, [id, urlParamId]);

  return <div ref={divRef}>{children}</div>;
}
