import { PropsWithChildren } from 'react';
import { IPersonalProject } from './IPersonalProject';
import PersonalProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPersonalProject.Payload;

export const PersonalProject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PERSONAL PROJECT">
      <PersonalProjectRow payload={payload} />
    </CommonSection>
  );
}
