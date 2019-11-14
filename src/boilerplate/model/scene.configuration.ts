import {WindowContainerConfiguration} from './window.container.configuration';

export class SceneConfiguration {
  id: number;
  key: string;
  metadata: {
    key: string,
  };

  containers: WindowContainerConfiguration[] = [];
}
