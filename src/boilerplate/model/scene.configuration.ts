import {WindowContainerConfiguration} from './window.container.configuratio';

export class SceneConfiguration {
  id: number;
  key: string;
  metadata: {
    key: string,
  };

  containers: WindowContainerConfiguration[] = [];
}
