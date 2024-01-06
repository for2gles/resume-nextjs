import { PropsWithChildren } from 'react';
import { IPersonalProject } from './IPersonalProject';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';

export default function OpenSourceRow({
  payload,
}: PropsWithChildren<{ payload: IPersonalProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
}

function serialize(item: IPersonalProject.Item): IRow.Payload {
  return {
    left: {
      title: item.title,
    },
    right: {
      descriptions: item.descriptions,
    },
  };
}
