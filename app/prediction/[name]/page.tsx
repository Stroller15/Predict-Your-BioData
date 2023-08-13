import { FC } from 'react'

interface params {
    params: {name: string};
}


const page: FC<params> = ({ params }: params) => {
  return <div>{params.name}</div>;
};

export default page